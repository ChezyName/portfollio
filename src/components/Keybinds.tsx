import { useEffect } from "react";
import * as THREE from 'three'

export interface IInput {
    w: boolean,
    s: boolean,
    a: boolean,
    d: boolean,
}

export function onKeyPressed(e:any,returnFunc:any,originalVals:IInput){
    let keyPress:string = e.key.toUpperCase();
    switch (keyPress) {
        case 'W':
            originalVals.w = true;
            break;
        case 'A':
            originalVals.a = true;
            break;
        case 'S':
            originalVals.s = true;
            break;
        case "D":
            originalVals.d = true;
            break;
        default:
            break;
    }

    returnFunc(originalVals);
}

export function onKeyReleased(e:any,returnFunc:any,originalVals:IInput){
    let keyPress:string = e.key.toUpperCase();
    switch (keyPress) {
        case 'W':
            originalVals.w = false;
            break;
        case 'A':
            originalVals.a = false;
            break;
        case 'S':
            originalVals.s = false;
            break;
        case "D":
            originalVals.d = false;
            break;
        default:
            break;
    }

    returnFunc(originalVals);
}


export function UpdateCarPosition(inputKeys:IInput,changeFunc:any,originalCarPosition:THREE.Vector3){
    let frwrd:number = 0;
    let right:number = 0;

    if(inputKeys.w) frwrd++;
    if(inputKeys.s) frwrd--;

    if(inputKeys.d) right++;
    if(inputKeys.a) right--;

    originalCarPosition.add(new THREE.Vector3(right,0,frwrd));
    changeFunc(originalCarPosition);
    console.log(originalCarPosition);
}