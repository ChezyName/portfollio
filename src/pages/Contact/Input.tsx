import React from 'react'

type input = {
    style:any,
    setInput:any,
    placeholder?:string,
    value:string,
    isTextArea?:boolean,
}

const Input = React.forwardRef((props:any,ref:any) => {

    let {style,setInput,placeholder,value,isTextArea}:input = props;

    function onChangeInput(event:any){
        let v = event.target.value;
        setInput(v);
    }

    let inputtype:JSX.Element = <input ref={ref} name={placeholder} value={value} onChange={onChangeInput} className={style} placeholder={placeholder}></input>
    if(isTextArea){
      inputtype = <textarea ref={ref} style={{resize: "none"}} name={placeholder} value={value} onChange={onChangeInput} className={style} placeholder={placeholder}></textarea>
    }

  return (
    <>{ inputtype }</>
  )
});

export default Input