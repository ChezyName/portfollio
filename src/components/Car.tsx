import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import {IInput} from "./Keybinds";
import { useRaycastVehicle, RaycastVehiclePublicApi } from '@react-three/cannon'

type CarProps = {
    carPosition: THREE.Vector3,
    UpdateCarPosition:any,
    input:IInput,
}

const Car = ({carPosition, UpdateCarPosition, input}:CarProps) => {
    const [carPos,setCarPos] = useState(new THREE.Vector3(0,0.4,0));

    const chassis = useRef<any>()
    const fr = useRef<any>()
    const fl = useRef<any>()
    const br = useRef<any>()
    const bl = useRef<any>()

    const api:RaycastVehiclePublicApi = createCar(1,1,2,3,-3,chassis,fr,fl,br,bl);

    useFrame(({ mouse }) => {
        //console.log(mouse);
        //UpdateCarPosition();
        //setCarPos(new THREE.Vector3(carPosition.x,0.35,carPosition.z));

        let speed = 0;
        if(input.w){
            //bWheel.current.rotation.x -= 0.1;
            //fWheel.current.rotation.x -= 0.1;
            speed++;
        }
        if(input.s){
            //bWheel.current.rotation.x += 0.1;
            //fWheel.current.rotation.x += 0.1;
            speed--;
        }
    });

    useThree(({camera}) => {
        let ncp:THREE.Vector3 = camera.position.lerp(new THREE.Vector3(carPosition.x,carPosition.y + 8,carPosition.z),0.25);
        camera.position.set(ncp.x,ncp.y,ncp.z);
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

            <mesh name={"fr"} position={[0.8,-0.12,-1]} ref={fr}>
                <meshBasicMaterial color="#444"/>
                <boxGeometry args={[0.5,0.5,0.5]}/>
            </mesh>

            <mesh name={'fl'} position={[-0.8,-0.12,-1]} ref={fl}>
                <meshBasicMaterial color="#444"/>
                <boxGeometry args={[0.5,0.5,0.5]}/>
            </mesh>

            <mesh name={"br"} position={[0.8,-0.12,1]} ref={br}>
                <meshBasicMaterial color="#444"/>
                <boxGeometry args={[0.5,0.5,0.5]}/>
            </mesh>

            <mesh name={'bl'} position={[-0.8,-0.12,1]} ref={bl}>
                <meshBasicMaterial color="#444"/>
                <boxGeometry args={[0.5,0.5,0.5]}/>
            </mesh>
        </group>
    )
}

export default Car

function createCar(radius:number,width:number,height:number,front:number,back:number,chassis:any,wheel1:any,wheel2:any,wheel3:any,wheel4:any) {
    const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0],
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    dampingRelaxation: 10,
    dampingCompression: 4.4,
    axleLocal: [-1, 0, 0],
    chassisConnectionPointLocal: [1, 0, 1],
    useCustomSlidingRotationalSpeed: true,
    customSlidingRotationalSpeed: -30,
    frictionSlip: 2
    }

    const wheelInfo1:any = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-width / 2, height, front] }
    const wheelInfo2:any = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [width / 2, height, front] }
    const wheelInfo3:any = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [-width / 2, height, back] }
    const wheelInfo4:any = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [width / 2, height, back] }

    const [vehicle, api] = useRaycastVehicle(() => ({
        chassisBody: chassis,
        wheels: [wheel1, wheel2, wheel3, wheel4],
        wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
        indexForwardAxis: 2,
        indexRightAxis: 0,
        indexUpAxis: 1
    }))

    return api;
}