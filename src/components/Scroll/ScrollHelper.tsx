import React, { useRef, useEffect } from 'react'
import scrollIntoView from 'scroll-into-view';
import disableScroll from 'disable-scroll';

const ScrollHelper = React.forwardRef((props, ref) => {
    let page = 0;
    let pagesRef:any = ref;

    let canScroll = true;
    let currentPage = 0;

    function onScroll(e:any)   {
        let direction = e.deltaY;

        if(direction > 0) page++;
        if(direction < 0) page--;

        if(page <= 0) page = 0;
        if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

        //pagesRef.current[page].scrollIntoView({behavior: "smooth"});
    }
    

    useEffect(() => {
        window.addEventListener('wheel', onScroll);
        disableScroll.on();

        setInterval(function(){
            if(currentPage != page && canScroll){
                canScroll = false;
                currentPage = page;
                console.log("Scrolling to page#" + page);
                scrollIntoView(pagesRef.current[page],function(){
                    canScroll = true;
                    console.log("can scroll!");
                });
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