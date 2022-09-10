import './App.css'

import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

import Box from "./components/Box";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <ambientLight/>
      <pointLight position={[10,10,10]}/>
      <Box position={[-1.2,0,0]}/>
      <Box position={[1.2,0,0]}/>
    </Canvas>
  )
}

export default App
