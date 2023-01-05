import React,{useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export default function Form() {
    const [inputs, setInputs] = useState({});
    const [resp,setResponse] =useState({});
    const navigate = useNavigate();
    async function fetchData() {
      const buf = Buffer.from(JSON.stringify({inputs}['inputs']))
      
        const res  = await axios.post(
          'student/',
          // JSON.stringify({inputs}['inputs'])
          JSON.parse(buf.toString())
        )
        console.log(res)
        setResponse(res);
        // console.log({resp});
        
        
      }
      useEffect(() => {
        fetchData()
      }, [])
    
   const handleonSubmit = (event) => {
    
    event.preventDefault();
    fetchData()
    console.log({resp})
    navigate('/testapi');
       
    }      
    
       
    const handleChange=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        setInputs(values => ({...values, [name]: value}))
    }
    
  return (
    <div>
       {/* { this.state.showMessage &&  
        <div>
            <FlashMessage duration={5000}>
                <strong>I will disappear in 5 seconds!</strong>
            </FlashMessage>
        </div>
   } */}
  
      <form onSubmit={handleonSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="student_name" 
        value={inputs.student_name} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="student_age" 
          value={inputs.student_age} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
      
    </div>
  )
}
