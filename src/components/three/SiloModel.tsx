import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Procedural galvanized grain silo, built from primitives:
 *   - a corrugated cylindrical body (stacked thin rings)
 *   - a conical roof with a small cap vent
 *   - a base ring and a simple access ladder
 *
 * Reacts to a shared scroll progress (0..1): the body rings gently
 * separate to "exploded view" and the whole assembly rotates, echoing the
 * scroll-storytelling brief (reveal the structure as you scroll).
 */

interface SiloModelProps {
  /** ref holding scroll progress 0..1 for the hero section */
  progress: React.MutableRefObject<number>
  /** number of corrugation rings — lower on mobile for performance */
  rings?: number
  detail?: number
}

const STEEL = '#aeb3bb'
const STEEL_DARK = '#7d828b'
const SAFETY = '#f5a623'

export function SiloModel({ progress, rings = 22, detail = 48 }: SiloModelProps) {
  const group = useRef<THREE.Group>(null)
  const bodyGroup = useRef<THREE.Group>(null)

  const bodyHeight = 4.2
  const radius = 1.55

  // Pre-compute the Y position of each corrugation ring.
  const ringData = useMemo(() => {
    const arr: { y: number; t: number }[] = []
    for (let i = 0; i < rings; i++) {
      const t = i / (rings - 1)
      arr.push({ y: -bodyHeight / 2 + t * bodyHeight, t })
    }
    return arr
  }, [rings])

  const steelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: STEEL,
        metalness: 0.85,
        roughness: 0.38,
      }),
    [],
  )
  const darkMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: STEEL_DARK,
        metalness: 0.8,
        roughness: 0.45,
      }),
    [],
  )
  const safetyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: SAFETY,
        metalness: 0.4,
        roughness: 0.5,
        emissive: new THREE.Color(SAFETY).multiplyScalar(0.12),
      }),
    [],
  )

  useFrame((state, delta) => {
    if (!group.current || !bodyGroup.current) return
    const p = progress.current
    const time = state.clock.elapsedTime

    // Continuous slow auto-rotation + scroll-driven spin.
    group.current.rotation.y += delta * 0.18
    group.current.rotation.y = group.current.rotation.y // keep continuous
    // Tilt slightly with scroll and float.
    group.current.position.y = Math.sin(time * 0.6) * 0.06 - p * 0.4
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.05 + p * 0.12,
      0.08,
    )

    // Exploded-view: separate the body rings as the user scrolls.
    bodyGroup.current.children.forEach((child, i) => {
      const t = ringData[i]?.t ?? 0
      const targetExtra = p * (t - 0.5) * 2.2
      child.position.y = THREE.MathUtils.lerp(
        child.position.y,
        (ringData[i]?.y ?? 0) + targetExtra,
        0.1,
      )
    })
  })

  return (
    <group ref={group} dispose={null} scale={1}>
      {/* Conical roof */}
      <mesh position={[0, bodyHeight / 2 + 0.62, 0]} castShadow material={steelMat}>
        <coneGeometry args={[radius + 0.06, 1.25, detail]} />
      </mesh>
      {/* Roof cap / vent */}
      <mesh position={[0, bodyHeight / 2 + 1.32, 0]} material={safetyMat}>
        <cylinderGeometry args={[0.16, 0.22, 0.28, 16]} />
      </mesh>

      {/* Corrugated body — stacked rings */}
      <group ref={bodyGroup}>
        {ringData.map((r, i) => (
          <mesh key={i} position={[0, r.y, 0]} material={i % 4 === 0 ? darkMat : steelMat} castShadow>
            <cylinderGeometry
              args={[radius, radius, bodyHeight / rings + 0.03, detail, 1, true]}
            />
          </mesh>
        ))}
      </group>

      {/* Base ring */}
      <mesh position={[0, -bodyHeight / 2 - 0.12, 0]} material={darkMat}>
        <cylinderGeometry args={[radius + 0.12, radius + 0.18, 0.3, detail]} />
      </mesh>
      {/* Concrete-ish foundation pad */}
      <mesh position={[0, -bodyHeight / 2 - 0.34, 0]} material={darkMat}>
        <cylinderGeometry args={[radius + 0.4, radius + 0.45, 0.16, detail]} />
      </mesh>

      {/* Access ladder (front face) */}
      <group position={[0, 0, radius + 0.02]}>
        <mesh position={[-0.12, 0, 0]} material={safetyMat}>
          <boxGeometry args={[0.05, bodyHeight + 0.4, 0.05]} />
        </mesh>
        <mesh position={[0.12, 0, 0]} material={safetyMat}>
          <boxGeometry args={[0.05, bodyHeight + 0.4, 0.05]} />
        </mesh>
        {Array.from({ length: 9 }).map((_, i) => (
          <mesh key={i} position={[0, -bodyHeight / 2 + 0.2 + (i * bodyHeight) / 9, 0]} material={steelMat}>
            <boxGeometry args={[0.3, 0.04, 0.04]} />
          </mesh>
        ))}
      </group>
    </group>
  )
}
