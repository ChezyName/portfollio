import React, {useState} from 'react'

type child = {
    items:any,
    style:string,
}

const FrameworkChild = ({items,style}:child) => {
  // Problem:
  // This will error if `items` is null/undefined
  let elements:any = [];
  let names:any = [];

  const [showTooltip, setShowTooltip] = useState(true);
  const [cElement, setCElement] = useState("");

  console.log()

  items.forEach((item: {link: any; name: any, desc: any}) => {
    let e = <a className={style} data-for={item.name+"-tt"} data-tip={item.desc} key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
    if(!names.includes(item.name)){
      elements.push(e);
      names.push(item.name);
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

export default FrameworkChild