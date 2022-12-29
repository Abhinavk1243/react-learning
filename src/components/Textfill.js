import React,{useState} from 'react'



export default function Textfill() {
  // const  setHeader=()=>{
  //   xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')
  // }
  const  convertIntoupper=()=>{
  
    
    settext(text.toUpperCase())
  }
  const handleonchange=(event)=>{
    settext(event.target.value)
  }

  const [text,settext]= useState()
  return (
    <div className="container my-3" >
    <div className="mb-3">
      <h1> Enter the text</h1>
      <textarea className="form-control" value ={text} onChange={handleonchange} id="mybox" rows= "8" ></textarea>
    </div>
    <button  className="btn btn-primary" onClick={convertIntoupper}>Convert into uppercase </button>
  </div>
  )
}

