import './App.css'
import React, { useEffect, useRef, useState, useCallback } from 'react'

import Navbar from './components/Navbar/Navbar'

function App() {
  const [curPage,setCurPage] = useState(0);
  let page = 0;
  const pagesRef:any = useRef(new Array());
  //pagesRef.current = [];

  function onScroll(e:any){
    let direction = e.deltaY;

    if(direction > 0) page++;
    if(direction < 0) page--;

    if(page <= 0) page = 0;
    if(page >= (pagesRef.current.length-1)) page = (pagesRef.current.length-1);

    console.log(page);

    pagesRef.current[page].scrollIntoView();
  }

  function addToPages(el:any){
    if(el && !pagesRef.current.includes(el)){
      pagesRef.current.push(el);
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', onScroll);

    // cleanup this component
    return () => {
      window.removeEventListener('wheel', onScroll);
    };
  }, []);

  return (
    <div style={{width: '100%',height: '100%'}}>
      <Navbar/>
      <div id="A" ref={addToPages}style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#600"}}/>
      <div id="B" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#060"}}/>
      <div id="C" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#006"}}/>
    </div>
  )
}

export default App