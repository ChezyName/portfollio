import React, { useEffect, useRef } from 'react'
import './ScrollButtons.css'

const ScrollButtons = React.forwardRef((props:any, ref:any) => {
    let amountOfChildren = ref.current.length;
    //console.log(ref);
    const elements:any = [];
    const elementsRef = useRef(new Array());;
    let lastActive = -1;
    //console.log(props);

    function addRefs(el:any){
        if(el && !elementsRef.current.includes(el)){
            elementsRef.current.push(el);
        }
    }

    const onClickSB = (event:any) => {
        let ID:number = Number(event.currentTarget.id);
        props.setActivePage(ID);
    }

    for(let i = 0; i < amountOfChildren; i++){
        elements.push(
            <div id={i.toString()} onClick={onClickSB} ref={addRefs} key={i} className="button"/>
        );
    }

    useEffect(()=>{
        setInterval(function(){
            let page = props.getActivePage();
            if(page != lastActive && elementsRef.current != null && elementsRef.current.length > 0){
                //console.log("PAGE:" + page);
                elementsRef.current.forEach((element) => {
                    element.classList.remove("active");
                });
                lastActive = page;
                elementsRef.current[lastActive].classList.add("active");
            }
        },2);
    });

    return (
        <nav className='mainLeft'>
            {elements}
        </nav>
    )
});

export default ScrollButtons