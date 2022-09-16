import React, { useRef, useEffect, useState, Suspense } from 'react'
import disableScroll from 'disable-scroll';

const ScrollButtons = React.lazy(() => import('./ScrollButtons'));

const ScrollHelper = React.forwardRef((props:any, ref:any) => {
    let page = 0;
    let pagesRef:any = ref;

    let canScroll = true;
    let Cpage = 0;

    function onScroll(e:any)   {
        let direction = e.deltaY;
        //console.log(page);

        if(direction > 0) page++;
        if(direction < 0) page--;

        //console.log(page);

        if(page <= 0) page = (0);;
        if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

        //props.setActivePage(page);
        pagesRef.current[page].scrollIntoView({behavior: "smooth"});
    }

    function getPage(){
        return page;
    }
    
    function setPage(num:number){
        page = num;
        pagesRef.current[page].scrollIntoView({behavior: "smooth"});
    }

    useEffect(() => {
        window.addEventListener('wheel', onScroll);
        disableScroll.on();
        document.body.onmousedown = e => { if (e.button === 1) return false; };

        // cleanup this component
        return () => {
            window.removeEventListener('wheel', onScroll);
        };
    }, []);

    
    return (
        <Suspense>
            <ScrollButtons ref={ref} getActivePage={getPage} setActivePage={setPage}/>
        </Suspense>
    )
})

export default ScrollHelper