import React, { useRef, useEffect, useState, Suspense } from 'react'
import disableScroll from 'disable-scroll';

const ScrollButtons = React.lazy(() => import('./ScrollButtons'));

const ScrollHelper = React.forwardRef((props:any, ref:any) => {
    let page = 0;
    let pagesRef:any = ref;

    let canScroll = true;
    let Cpage = 0;
    let Scrolled = false;

    var xDown:any = null;                                                        
    var yDown:any = null;
    
    function getTouches(evt:any) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     
                                                                             
    function handleTouchStart(evt:any) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                             
    function handleTouchMove(evt:any) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                             
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* right swipe */ 
            } else {
                /* left swipe */
            }                       
        } else {
            if ( yDiff > 0 ) {
                page++;
            } else { 
                page--;
            }                                                                 
        }

        if(page <= 0) page = (0);
        if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

        pagesRef.current[page].scrollIntoView({behavior: "smooth"});

        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

    // SCROLL FUNCTIONS

    function onScroll(e:any)   {
        if(Math.abs(e.deltaY) <= 35 || Scrolled) return;
        Scrolled = true;
        //console.log(e.deltaY);
        let direction = e.deltaY;
        //console.log(page);

        if(direction > 0) page++;
        if(direction < 0) page--;

        //console.log(page);

        if(page <= 0) page = (0);
        if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

        pagesRef.current[page].scrollIntoView({behavior: "smooth"});
        setTimeout(()=>{Scrolled=false},800);
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
        window.addEventListener('touchstart', handleTouchStart);        
        window.addEventListener('touchmove', handleTouchMove);

        disableScroll.on();
        document.body.onmousedown = e => { if (e.button === 1) return false; };
        //setPage(0);

        // cleanup this component
        return () => {
            window.removeEventListener('wheel', onScroll);
            window.removeEventListener('touchstart', handleTouchStart);        
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    
    return (
        <Suspense>
            <ScrollButtons ref={ref} getActivePage={getPage} setActivePage={setPage}/>
        </Suspense>
    )
})

export default ScrollHelper