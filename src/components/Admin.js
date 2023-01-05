import React,{useEffect,useState} from 'react';


export default function Admin(props) {
    
    const [jsonData,setJson]=useState([]);


useEffect(() => {
    fetch("/student/").then((res) =>
        res.json().then((jsondata) => {setJson(jsondata['data']);
        })
    );
}, []);


const getHeader=()=>{return (
    <>
        {(() => {
            const arr = [];
            
            if ({jsonData}['jsonData'].length !=0){
            const key = Object.keys({jsonData}['jsonData'][0]);
            
            for(let j=0;j<key.length;j++) {
              if(key[j]!='undefineed'){
                // console.log(key[j])
                arr.push( <th scope="col">{key[j]}</th>)
              }
            }
            arr.push(<th scope='col'>Delete</th>)
            
           
            return arr;}
            
        })()}
    </>
)};



  const createTable=()=>{ 
    const handleonDelete=(data)=>{
        console.log(data);
        
    }
    
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
                    arr.push(<th scope='col'><button type="button" onClick={() =>handleonDelete(data_obj)} className="btn btn-danger">Delete Record</button></th>)
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
);
}
