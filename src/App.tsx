import './App.css'
import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import ScrollHelper from './components/Scroll/ScrollHelper';

const  ScrollButtons = React.lazy(() => import('./components/Scroll/ScrollButtons'));

function App() {
  const pagesRef:any = useRef(new Array());

  function addToPages(el:any){
    if(el && !pagesRef.current.includes(el)){
      pagesRef.current.push(el);
    }
  }

  return (
    <div style={{width: '100%',height: '100%'}}>
      <Suspense>
        <Navbar/>
        <ScrollHelper ref={pagesRef}/>      
        <div id="A" ref={addToPages}style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#600", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>1</div>
        <div id="B" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#060", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>2</div>
        <div id="C" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#006", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>3</div>
      </Suspense>
    </div>
  )
}

export default App