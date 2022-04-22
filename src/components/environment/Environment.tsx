import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Statue from './Statue'

const Environment: React.FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Statue position={[0, 1.4, -2.3]} scale={0.15} />

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
