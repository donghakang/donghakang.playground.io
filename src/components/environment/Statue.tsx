import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { GLTF } from 'three-stdlib'
import { useFrame, useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
    mesh_1: THREE.Mesh
    mesh_2: THREE.Mesh
    mesh_3: THREE.Mesh
    mesh_4: THREE.Mesh
    mesh_5: THREE.Mesh
    mesh_6: THREE.Mesh
    mesh_7: THREE.Mesh
    mesh_8: THREE.Mesh
    mesh_9: THREE.Mesh
    mesh_10: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshBasicMaterial
  }
}

function Material() {
  return (
    <meshStandardMaterial
      attach="material"
      color="white"
      roughness={0.1}
      metalness={0.9}
    />
  )
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  // TODO: type any is not good
  const group = useRef<any>()
  const { nodes } = useGLTF('assets/statue.gltf') as GLTFResult
  useFrame((state, delta) => {
    if (group.current !== undefined) {
      group.current.rotation.y += 0.01
    }
  })

  //
  return (
    <group ref={group} dispose={null}>
      <group {...props} rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[15.5, -19.29, 0]}
          rotation={[Math.PI / 2, -0.21, -Math.PI / 3]}
        >
          <group position={[-11.35, -22.63, -4.5]}>
            <mesh geometry={nodes.mesh_0.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_1.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_2.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_3.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_4.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_5.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_6.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_7.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_8.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_9.geometry}>
              <Material />
            </mesh>
            <mesh geometry={nodes.mesh_10.geometry}>
              <Material />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/statue.gltf')
