import React,{useEffect,useState} from 'react';


export default function Admin(props) {
    
    const [jsonData,setJson]=useState([]);
    const [key,setKey] =useState([]);

    useEffect(() => {
      
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => setJson(json['data']));
      }, []);    
      
      setKey(Object.keys({jsonData}['jsonData'][0]));
      console.log({key})
      
    const getHeader=()=>{return (
      <>
          {(() => {
              const arr = [];
              
              if ({jsonData}['jsonData'].length !=0){
              
              console.log({key});
              for(let j=0;j<{key}.length;j++) {
                if({key}[j]!='undefineed'){
                  // console.log(key[j])
                  arr.push( <th scope="col">{key[j]}</th>)
                }
              }
              
             
              return arr;}
              
          })()}
      </>
  )};

    const createTable=()=>{ 
        return (
          <>
              {(() => {
                  const arr = [];
                  const arr1 = [];
                  if ({jsonData}['jsonData'].length !=0){
                    const key = Object.keys({jsonData}['jsonData'][0]);
                  for(let i=0;i<{jsonData}['jsonData'].length;i++) {
                    const data_obj={jsonData}['jsonData'][i];
                  
                    const arr = [];
                    for(let j=0;j<key.length;j++){
                      if(typeof(data_obj)=='undefined'){
                          continue;
                      }else{
                        if(typeof(data_obj[key[j]])=='undefined') { continue; }
                        else{arr.push(<td>{data_obj[key[j]]}</td>); 
                        
                        }
                      
                       }
                      
                    }
                    if (arr.length!=0){
                    arr1.push(<tr>{arr}</tr>);
                    
                    }
                    
                    
                }}
                  return (arr1) ;
              })()}
          </>
      )

      
        
    };


return (
<div className='container my-3'>
  <h1 >TEST API</h1>
  <div className='container my-3'>
<table className="table table-bordered">
  <thead className="thead-dark">
  <tr className='table-dark' >
    {getHeader()}
  </tr>
  </thead>
  <tbody>
  
  {createTable()}
 
  </tbody>
  </table> 
  </div> 
  </div>
)
}
