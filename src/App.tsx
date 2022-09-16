import './App.css'
import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react'

import Navbar from './components/Navbar/Navbar'
import ScrollHelper from './components/Scroll/ScrollHelper';

const  ScrollButtons = React.lazy(() => import('./components/Scroll/ScrollButtons'));

function App() {
  const pagesRef:any = useRef(new Array());
  const [currentActivePage,setCurrentActivePage] = useState(0);

  function addToPages(el:any){
    if(el && !pagesRef.current.includes(el)){
      pagesRef.current.push(el);
    }
  }

  function getActivePage(){
    return currentActivePage;
  }

  function setActivePage(num:number){
    setCurrentActivePage(num)
  }

  return (
    <div style={{width: '100%',height: '100%'}}>
      <Navbar/>
      <ScrollHelper ref={pagesRef} getActivePage={getActivePage} setActivePage={setActivePage}/>      
      <div id="A" ref={addToPages}style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#600", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>1</div>
      <div id="B" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#060", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>2</div>
      <div id="C" ref={addToPages} style={{width: '100%',height: '100%', display: 'block', backgroundColor: "#006", fontSize: "5em", textAlign: 'center', verticalAlign: 'center'}}>3</div>
      
      <Suspense>
        <ScrollButtons ref={pagesRef} getActivePage={getActivePage} setActivePage={setActivePage}/>
      </Suspense>
    </div>
  )
}

export default App