import{j as t,F as h,a as c}from"./index.6c9989bf.js";const g=({langs:l})=>{let i=[],n=[];console.log();let o=Math.min(8,80/(l.length-1))+"%";return l.forEach(r=>{let e=r.title,a=r.color,s=c("div",{style:{width:"100%",height:o,backgroundColor:"transparent",display:"flex",fontWeight:"bold",marginRight:"4px"},children:[" ",t("div",{style:{height:"100%",aspectRatio:"1 / 1",backgroundColor:a,display:"block",textAlign:"center",verticalAlign:"center"}},e+"2")," ",t("span",{style:{width:"80%",height:"80%",display:"inline-flex",color:"white"},children:e})," "]},e+"1");n.includes(e)||(i.push(s),n.push(e))}),t(h,{children:i})};export{g as default};
