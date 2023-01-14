import React,{useEffect,useState} from 'react';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import ButtonGroup from 'rsuite/ButtonGroup';
  
import FileUploadIcon from '@rsuite/icons/FileUpload';
import OffRoundIcon from '@rsuite/icons/OffRound';
import SendIcon from '@rsuite/icons/Send';
import "rsuite/dist/rsuite.min.css";
import TrashIcon from '@rsuite/icons/Trash';
import IconButton from 'rsuite/IconButton';

export default function Admin(props) {
    
    const [jsonData,setJson]=useState([]);


useEffect(() => {
    fetch("/student/").then((res) =>
        res.json().then((jsondata) => {setJson(jsondata['data']);
        })
    );
    $(document).ready(function () {
      setTimeout(function(){
      $('#example').DataTable();
       } ,1000);
  });
  
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
                    // arr.push(<th scope='col'><button type="button" onClick={() =>handleonDelete(data_obj)} className="btn btn-danger"><i className="bi bi-trash">Delete Record</i></button></th>)
                    arr.push(<th scope='col'> <IconButton icon={<TrashIcon />}   appearance="primary" color="red" onClick={() =>handleonDelete(data_obj)} ></IconButton></th>)
                    // arr.push(<th scope='col'><a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a></th>)
                   
                    arr1.push(<tr  >{arr}</tr>);
                  
                  }
                  
                  
              }}
                return (arr1) ;
            })()}
        </>
    )

    
      
  };


return (
<div className="container-lg">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Employee <b>Details</b></h2></div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
<table id="example"  className="table table-bordered">
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
</div>    
);
}
