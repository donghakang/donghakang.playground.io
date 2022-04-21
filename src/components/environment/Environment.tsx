import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Statue from './Statue'

const Environment: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas style={{ width: '100vw', height: '100vh' }}>
          <Statue position={[0, 0, -1.2]} scale={0.07} />

          <group>
            <directionalLight
              castShadow
              position={[2.5, 6, 5]}
              intensity={0.8}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <directionalLight
              castShadow
              position={[5, 0, -10]}
              intensity={0.7}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
          </group>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </>
  )
}

export default Environment
