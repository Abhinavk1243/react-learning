import React,{useEffect} from 'react';
import {useState} from 'react';
import { json } from 'react-router-dom';

export default function Table() {
    const [jsonData,setJson]=useState([]);
    useEffect(() => {
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => setJson(json['data']))
      }, []);    
      ;
      const data_obj_array = {jsonData}['jsonData'];
      let data_obj= data_obj_array[0];
      console.log(data_obj.keys());
      
      // console.log(Object.keys(data_obj));
      
      
      // if (data_obj==null) {
      //   Object.assign(window.UndefinedVariable, {})
      // }else {
      //  key1= Object.keys(data_obj[1])
      // };
      // console.log(key1);
      
    // const getHeader=()=>{return (<><th></th></>
  //     <>
  //         {(() => {
  //             const arr = [];
  //             for(let j;j>=key.length;j++) {
  //                 arr.push(
  //                     <th>{key[j]}</th>
  //                 )
  //             }
  //             return arr;
  //         })()}
  //     </>
  // )};

    const createTable=()=>{ 
      return (<h1>fafa</h1>
        // return (
        //   <>
        //       {(() => {
        //           const arr = [];
        //           for(let i;i>=data_obj.length;i++) {
        //             for(var j;j>=key.length;j++){
        //               arr.push(
        //                   <td>data_obj[{i}][{key[j]}]</td>     
        //               );
        //           }
        //         }
        //           return arr;
        //       })()}
        //   </>
      )

      
        
    };


return (
<div className="App">
<table>
  {/* <tr>
    {getHeader()}
  </tr> */}
  <tr>
  {createTable()}
  </tr>
  </table>
  </div>
)
}
