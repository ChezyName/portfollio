import React from 'react'

type c = {
    title:string,
    desc:string[] | LinkMode[],
    isMiddle:string,
}

export interface LinkMode {
    desc:string;
    link:string;
}

const Component = ({title,desc,isMiddle}:c) => {
    const elements:any[] = [];

    desc.forEach(el => {
        let element:any = el;
        console.log(typeof element);
        if(typeof element == "string"){
            let e:any = <li key={element + "A"} style={{
                listStyleType: "square",
                listStylePosition: "inside",
                fontWeight: "bold",
                marginTop:"5px",
            }}>{element}</li>
            elements.push(e);
        }
        else{
            let e:any = <li key={element.desc + "A"} id={element.link} style={{
                listStyleType: "square",
                listStylePosition: "inside",
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                marginTop:"5px",
            }}><a style={{color: "#02c8ff"}} target="_blank" rel="noopener noreferrer" key={element.link} href={element.link}>{element.desc}</a></li>
            elements.push(e);
        }
    });

    return (
        <li className={isMiddle} style={{
            border: "2px white solid",
            padding: "15px",
            listStyleType: "none",
            textAlign: "left",
            backgroundColor: "rgb(32, 49, 82)"
        }}>
            <h3>{title}</h3>
            <li style={{
                display: "list-item",
            }}>
                {
                    elements
                }
            </li>
        </li>
    )
}

export default Component