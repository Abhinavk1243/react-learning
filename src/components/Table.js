import React,{useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import $ from 'jquery'; 


export default function Table(props) {
    
    const [jsonData,setJson]=useState([]);
    const [inputs, setInputs] = useState({});
    const [resp,setResponse] =useState({});
    const navigate = useNavigate();
    async function fetchData() {
      const buf = Buffer.from(JSON.stringify({inputs}['inputs']))
      console.log({inputs})
      
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
    
   const handleonSubmit = () => {
    
    // event.preventDefault();
    // console.log('hee')
    fetchData()
    console.log({resp})
    navigate('/testapi');
       
    }      
    
       
    const handleChange=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        console.log(value)

        setInputs(values => ({...values, [name]: value}))
    }
    


useEffect(() => {
    fetch("/student/").then((res) =>
        res.json().then((jsondata) => {setJson(jsondata['data']);
        })
    );
    $(document).ready(function(){
      $('[data-toggle="tooltip"]');
      var actions = $("table td:last-child").html();
      // Append table with add row form on add new button click
        $(".add-new").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        // var htm = $("table tbody tr:last-child td:last-child").html()
        // console.log(htm.length);
        // console.log($('table').children('tbody').children('tr').children('td'))
        // console.log($("table td ").length)
        // console.log($("table th ").length)
        // console.log()
        
        
        // <input 
        //   type="number" 
        //   name="student_age" 
        //   value={inputs.student_age} 
        //   onChange={handleChange}
        // />
            var row = '<tr>' +
                '<td>--/--</td>' +
                `<td><input  type="number" className="form-control" name="student_age"  value=${inputs.student_age} onChange=${handleChange}/></td>` 
                +
                '<td>--/--</td>' 
                {`<td><input type="text" className="form-control" name="student_name"  value=${inputs.student_name} onChange=${handleChange}></td>`}
                +
          '<td>' + $("table td:last-child").html() + '</td>' +
            '</tr>';
          $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
            $('[data-toggle="tooltip"]');
        });
      // Add row on add button click
      $(document).on("click", ".add", function(){
        handleonSubmit()
        // var empty = false;
        // var input = $(this).parents("tr").find('input[type="text"]');
        // console.log(input)
        //     input.each(function(){
        //   if(!$(this).val()){
        //     $(this).addClass("error");
        //     empty = true;
        //   } else{
        //             $(this).removeClass("error");
        //         }
        // });
        // $(this).parents("tr").find(".error").first().focus();
        // if(!empty){
        //   input.each(function(){
        //     $(this).parent("td").html($(this).val());
        //   });			
        //   $(this).parents("tr").find(".add, .edit").toggle();
        //   $(".add-new").removeAttr("disabled");
        // }		
        });
      // Edit row on edit button click
      $(document).on("click", ".edit", function(){		
            $(this).parents("tr").find("td:not(:last-child)").each(function(){
          $(this).html('<input type="text" className="form-control" value="' + $(this).text() + '">');
        });		
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
        });
      // Delete row on delete button click
      $(document).on("click", ".delete", function(){
            $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
        });
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
            arr.push(<th>Actions</th>)
            
           
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
                    // arr.push(<th scope='col'><button type="button" onClick={() =>handleonDelete(data_obj)} className="btn btn-danger">Delete Record</button></th>)
                   arr.push(<td>
                    <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                    <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                </td>)
                    arr1.push(<tr  >{arr}</tr>);
                  
                  }
                  
                  
              }}
                return (arr1) ;
            })()}
        </>
    )

    
      
  };


return (
<>
<div className="container-lg">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Employee <b>Details</b></h2></div>
                     {/* <h1>{inputs}</h1> */}
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
           
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {/* <th>Name</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Actions</th> */}
                        {getHeader()}
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                        <td>
                            <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Peter Parker</td>
                        <td>Customer Service</td>
                        <td>(313) 555-5735</td>
                        <td>
                            <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Fran Wilson</td>
                        <td>Human Resources</td>
                        <td>(503) 555-9931</td>
                        <td>
                            <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>       */}
                    {createTable()}
                </tbody>
            </table>
        </div>
    </div>
</div>     
</>
);
}
