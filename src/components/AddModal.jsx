import React from 'react'
import { useState } from 'react';


const AddModal = ({selectedTeacher,appoinment,setAppoinment}) => {
 

    const [modalData, setModalData]= useState({
     tname:"", 
    sname:"",
    date:"",
    time:"",
    id:"",
    img:"",


    });

 
    const {sname,date,time}= modalData
    
    const handleModalData=(e)=>{
    setModalData({...modalData, [e.target.name]: e.target.value})

}




const handleSave=()=>{
  setAppoinment([...appoinment,{...modalData,...selectedTeacher,id:new Date().getTime(),consulted:false}])
    setModalData({
        date:"",
        sname:"",
        time:"",
        tname:"",
        consulted: false,
    })
}

  return (
    <>



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedTeacher?.tname}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
      <div className="modal-body">
       
  <div className="input-group mb-3 d-flex jus">
    <div>
  <span className="input-group-text" id="inputGroup-sizing-default" name="name" placeholder='İsminizi Giriniz' aria-label='name' 
  value={sname|| ""}
  onChange={handleModalData}
  >Student Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <div className='d-flex flex-column'>
  <span className="input-group-text" id="inputGroup-sizing-default">Day/Time</span>
  <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
value={date || ""}
    id="date"onChange={handleModalData}
    name="date"/>
  <input type="time" className='form-control' id='exampleTime' name='time' value={time} onChange={handleModalData}/>
  </div>
  
  
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default AddModal