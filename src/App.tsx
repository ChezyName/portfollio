import './App.css'

import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from "@react-three/drei";
import { Physics, useCylinder, usePlane } from '@react-three/cannon'

import Car from './components/Car'
import { onKeyPressed, UpdateCarPosition, onKeyReleased, IInput } from './components/Keybinds'

function App() {
  const [carPosition,setCarPos] = useState(new THREE.Vector3);
  const [inputButtons,setInput] = useState<IInput>({w: false, a: false, s: false, d: false});

  useEffect(() => {
    document.addEventListener('keydown',(e) => onKeyPressed(e,setInput,inputButtons));
    document.addEventListener('keyup',(e) => onKeyReleased(e,setInput,inputButtons));
  });

  function updateInput(){
    //console.log("Chaning Car position")
    UpdateCarPosition(inputButtons,setCarPos,carPosition);
  }

  return (
    <Canvas
      className='canvas'
      camera={{
        near: 0.01,
        far: 1000,
        zoom: 1,
        fov: 90,
        position: [0,8,0],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#252934");
      }}>

      <Stats />
      <OrbitControls/>
      {/** 
      <gridHelper args={[500,500]}/>
      <axesHelper args={[2]} />
      */}
      
      <ambientLight/>
      <pointLight position={[0,4,0]}/>
      
      <Physics broadphase="SAP" allowSleep>
        <Car input={inputButtons} UpdateCarPosition={updateInput} carPosition={carPosition}/>

        <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
        <Pillar position={[-5, 2.5, -5]} userData={{ id: 'pillar-1' }} />
        <Pillar position={[0, 2.5, -5]} userData={{ id: 'pillar-2' }} />
        <Pillar position={[5, 2.5, -5]} userData={{ id: 'pillar-3' }} />
      </Physics>

      <Suspense fallback={null}>
          <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

export default App

function Plane(props:any) {
  const [ref] = usePlane<any>(() => ({ type: 'Static', material: 'ground', ...props }))
  return (
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  )
}

function Pillar({ args = [0.7, 0.7, 5, 16], ...props }:any) {
  const [ref] = useCylinder<any>(() => ({ mass: 10, args, ...props }))
  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={args} />
      <meshBasicMaterial color="#882929" />
    </mesh>
  )
}