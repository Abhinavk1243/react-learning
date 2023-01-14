import React,{useEffect,useState} from 'react';
// import "ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


export default function Table(props) {
    
    const [jsonData,setJson]=useState([]);


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
            var row = '<tr>' +
                '<td><input type="text" className="form-control" name="name" id="name"></td>' +
                '<td><input type="text" className="form-control" name="department" id="department"></td>' +
                '<td><input type="text" className="form-control" name="phone" id="phone"></td>' +
          '<td>' + actions + '</td>' +
            '</tr>';
          $("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
            $('[data-toggle="tooltip"]');
        });
      // Add row on add button click
      $(document).on("click", ".add", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
            input.each(function(){
          if(!$(this).val()){
            $(this).addClass("error");
            empty = true;
          } else{
                    $(this).removeClass("error");
                }
        });
        $(this).parents("tr").find(".error").first().focus();
        if(!empty){
          input.each(function(){
            $(this).parent("td").html($(this).val());
          });			
          $(this).parents("tr").find(".add, .edit").toggle();
          $(".add-new").removeAttr("disabled");
        }		
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
                    arr.push(<th scope='col'><button type="button" onClick={() =>handleonDelete(data_obj)} className="btn btn-danger">Delete Record</button></th>)
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
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>      
                </tbody>
            </table>
        </div>
    </div>
</div>     
</>
);
}
