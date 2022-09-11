import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import {IInput} from "./Keybinds";
import { clamp } from 'three/src/math/MathUtils';

type CarProps = {
    carPosition: THREE.Vector3,
    UpdateCarPosition:any,
    input:IInput,
}

const Car = ({carPosition, UpdateCarPosition, input}:CarProps) => {
    const [carPos,setCarPos] = useState(new THREE.Vector3(0,0.25,0));
    const bWheel = useRef<any>();
    const fWheel = useRef<any>();
    const fWheelR = useRef<any>();

    useFrame(({ mouse }) => {
        //console.log(mouse);
        //UpdateCarPosition();
        //setCarPos(new THREE.Vector3(carPosition.x,0.35,carPosition.z));

        let wheelRotation = fWheelR.current.rotation.y;
        if(input.a){
            wheelRotation += 0.05;
        }
        if(input.d){
            wheelRotation -= 0.05;
        }
        if((input.a && input.d) || (input.a == false && input.d == false)){
            if(wheelRotation > 0) wheelRotation -= 0.05;
            if(wheelRotation < 0) wheelRotation += 0.05;
        }

        if(wheelRotation >= 0.25) wheelRotation = 0.25;
        if(wheelRotation <= -0.25) wheelRotation = -0.25;
        fWheelR.current.rotation.y = wheelRotation;

        if(input.w){
            bWheel.current.rotation.x -= 0.1;
            fWheel.current.rotation.x -= 0.1;

            console.log(fWheelR.current.getWorldPosition());
        }
        if(input.s){
            bWheel.current.rotation.x += 0.1;
            fWheel.current.rotation.x += 0.1;
        }
    });

    useThree(({camera}) => {
        //camera.position.set(carPosition.x,8,carPosition.z);
    });

  return (
    <group position={carPos}>
        <mesh name="body">
            <meshBasicMaterial color="#0011ff"/>
            <boxGeometry args={[1.5,0.75,3]}/>
        </mesh>

        <mesh name="head" position={[0,0.5,0.3]}>
            <meshBasicMaterial color="#00c3ff"/>
            <boxGeometry args={[1.25,0.75,1.4]}/>
        </mesh>

        <mesh name="bWheel" position={[0,-0.1,0.9]} ref={bWheel}>
            <meshBasicMaterial color="#444"/>
            <boxGeometry args={[2,0.5,0.5]}/>
        </mesh>

        <group name="fWheelRot" position={[0,-0.1,-0.9]} ref={fWheelR}>
            <mesh name="fWheel" ref={fWheel}>
                <meshBasicMaterial color="#444"/>
                <boxGeometry args={[2,0.5,0.5]}/>
            </mesh>
        </group>
    </group>
  )
}

export default Car