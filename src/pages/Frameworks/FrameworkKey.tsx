import React from 'react'

type key = {
    langs:any,
    style:any,
}

const FrameworkKey = ({langs}:key) => {
    let elements:any = [];
    let names:any = [];
  
    console.log()

    let H:string = Math.min(8,80/(langs.length-1)) + "%";
  
    langs.forEach((item: { title: any; color: any; name: any; }) => {
      let t = item.title;
      let c = item.color;

      let e = <div key={t+"1"} style={{width: '100%', height: H, backgroundColor: "transparent", display: "flex", fontWeight: "bold",marginRight: "4px"}}> <div key={t+"2"} style={{height: "100%", aspectRatio: "1 / 1",backgroundColor: c, display: "block", textAlign: "center", verticalAlign: "center"}}/> <span style={{width: "80%", height: "80%", display: "inline-flex", color: "white"}}>{t}</span> </div>

      if(!names.includes(t)){
        elements.push(e);
        names.push(t);
      }
    });
  
    return (
      <>
      {
          elements
      }
      </>
    );
}

export default FrameworkKey