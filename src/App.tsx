import './App.css'
import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import ScrollHelper from './components/Scroll/ScrollHelper';

/* PAGES */
import Loading from './pages/Loading/Loading';
import HomePage from './pages/Home/HomePage';

const ScrollButtons = React.lazy(() => import('./components/Scroll/ScrollButtons'));

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
        <ScrollHelper ref={pagesRef}/>      
        
        <div ref={addToPages} style={{width: "100%", height: "100%"}}><HomePage/></div>

      </Suspense>
    </div>
  )
}

export default App