import React, { useRef, useEffect, useState } from 'react'
import disableScroll from 'disable-scroll';

const ScrollHelper = React.forwardRef((props:any, ref:any) => {
    let page = 0;
    let pagesRef:any = ref;

    let canScroll = true;
    let Cpage = 0;

    function onScroll(e:any)   {
        let direction = e.deltaY;

        if(direction > 0) page++;
        if(direction < 0) page--;

        console.log(page);

        if(page <= 0) page = (0);;
        if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

        pagesRef.current[page].scrollIntoView({behavior: "smooth"});
        props.setActivePage(page);
    }

    useEffect(() => {
        window.addEventListener('wheel', onScroll);
        disableScroll.on();

        setInterval(function(){
            page = props.getActivePage();
            if(Cpage != page && canScroll){
                canScroll = false;
            }
        },5);

        // cleanup this component
        return () => {
            window.removeEventListener('wheel', onScroll);
        };
    }, []);

    return (
        <></>
    )
})

export default ScrollHelper