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
{/*   
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
    </form> */}
    <div className="container my-3">
    <form className="needs-validation" novalidate onSubmit={handleonSubmit}>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationTooltip01">Student name</label>
      <input type="text" className="form-control" name="student_name"  onChange={handleChange} id="validationTooltip01" placeholder="First name" value={inputs.student_name} required/>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
   
    
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationTooltip03">Student Age</label>
      <input type="number" className="form-control" name="student_age"  value={inputs.student_age}  id="validationTooltip03"  onChange={handleChange}  placeholder='0' required/>
      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
      
    </div>
    </div>
  )
}
