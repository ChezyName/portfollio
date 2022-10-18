import './App.css'
import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import ScrollHelper from './components/Scroll/ScrollHelper';

import { env } from './ENV';

/* PAGES */
import Loading from './pages/Loading/Loading';
import HomePage from './pages/Home/HomePage';
import About from './pages/AboutMe/About';
import Experience from './pages/Experience/Experience';

const ScrollButtons = React.lazy(() => import('./components/Scroll/ScrollButtons'));

function App() {
  const pagesRef:any = useRef(new Array());

  function addToPages(el:any){
    if(el && !pagesRef.current.includes(el)){
      pagesRef.current.push(el);
    }
  }

  useEffect(()=>{
    document.title = env.VITE_NAME
  });

  return (
    <div style={{width: '100%',height: '100%', backgroundColor: "rgb(28, 41, 66)", zIndex: "-5"}}>
      <Suspense>
        <ScrollHelper ref={pagesRef}/>      
        <div ref={addToPages} style={{width: "100%", height: "100%"}}><HomePage/></div>
        <div ref={addToPages} style={{width: "100%", height: "100%"}}><About/></div>
        <div ref={addToPages} style={{width: "100%", height: "100%"}}><Experience/></div>
      </Suspense>
    </div>
  )
}

export default App