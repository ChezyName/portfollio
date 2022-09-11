import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

type CarProps = {
    carPosition: THREE.Vector3,
    UpdateCarPosition:any,
}

const Car = ({carPosition, UpdateCarPosition}:CarProps) => {
    useFrame((state) => {
        UpdateCarPosition();
    });

  return (
    <group position={(new THREE.Vector3(carPosition.x,0,carPosition.z))}>
        <mesh name="body">
            <meshBasicMaterial color="#0011ff"/>
            <boxGeometry args={[2,4,2]}/>
        </mesh>
    </group>
  )
}

export default Car