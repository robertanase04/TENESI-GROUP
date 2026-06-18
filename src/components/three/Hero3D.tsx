import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Grid, Float } from '@react-three/drei'
import { SiloModel } from './SiloModel'

/**
 * 3D hero scene. Renders the procedural silo on a technical grid floor with
 * studio lighting and a warm safety-yellow rim light. Degrades gracefully:
 *   - prefers-reduced-motion  → static CSS fallback (no WebGL)
 *   - small screens           → fewer rings, lower DPR, no contact shadows
 */
export function Hero3D() {
  const progress = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 768px)')
    const update = () => {
      setReduced(mqReduced.matches)
      setIsMobile(mqMobile.matches)
    }
    update()
    mqReduced.addEventListener('change', update)
    mqMobile.addEventListener('change', update)
    return () => {
      mqReduced.removeEventListener('change', update)
      mqMobile.removeEventListener('change', update)
    }
  }, [])

  // Track scroll progress across the first viewport for the exploded view.
  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 1
      progress.current = Math.min(1, Math.max(0, window.scrollY / h))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (reduced) return <StaticSiloFallback />

  return (
    <Canvas
      shadows={!isMobile}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [5.5, 1.6, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <fog attach="fog" args={['#15181c', 12, 26]} />

      {/* Lighting rig */}
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={2.1}
        castShadow={!isMobile}
        shadow-mapSize={[1024, 1024]}
      />
      {/* warm safety rim light */}
      <pointLight position={[-5, 2, -3]} intensity={28} color="#f5a623" distance={20} />
      {/* cool fill */}
      <pointLight position={[4, -2, 5]} intensity={14} color="#5aa9e6" distance={18} />

      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.4} enabled={!isMobile}>
          <SiloModel progress={progress} rings={isMobile ? 14 : 22} detail={isMobile ? 32 : 56} />
        </Float>

        {!isMobile && (
          <ContactShadows
            position={[0, -2.85, 0]}
            opacity={0.55}
            scale={14}
            blur={2.6}
            far={5}
            color="#000000"
          />
        )}

        {/* Technical blueprint floor */}
        <Grid
          position={[0, -2.85, 0]}
          args={[30, 30]}
          cellSize={0.6}
          cellThickness={0.6}
          cellColor="#2b2f36"
          sectionSize={3}
          sectionThickness={1}
          sectionColor="#3d8bcc"
          fadeDistance={22}
          fadeStrength={1.5}
          followCamera={false}
          infiniteGrid
        />
      </Suspense>
    </Canvas>
  )
}

/** Pure-CSS silhouette used when WebGL/animation is undesirable. */
function StaticSiloFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative" aria-hidden="true">
        <div
          className="mx-auto h-0 w-0"
          style={{
            borderLeft: '90px solid transparent',
            borderRight: '90px solid transparent',
            borderBottom: '70px solid #8a8f98',
          }}
        />
        <div className="bg-grid h-64 w-44 bg-steel-400/80" />
        <div className="mx-auto h-3 w-52 -translate-x-1 bg-steel-600" />
      </div>
    </div>
  )
}
