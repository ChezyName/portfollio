import './App.css'

import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import { Stats, OrbitControls } from "@react-three/drei";

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
    console.log("Chaning Car position")
    UpdateCarPosition(inputButtons,setCarPos,carPosition);
  }

  return (
    <Canvas
      className='canvas'
      camera={{
        near: 0.01,
        far: 1000,
        zoom: 1,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#252934");
      }}>
      <Stats />
      <OrbitControls />
      <gridHelper args={[500,500]}/>
      <ambientLight/>
      <pointLight position={[0,0,0]}/>
      <Car UpdateCarPosition={updateInput} carPosition={carPosition}/>
    </Canvas>
  )
}

export default App
