import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faRocket);
const AppoinmentList = ({ appoinment, setAppoinment }) => {
const [show,setShow]=useState(false)

  const handleDelete=(id)=>{
    setAppoinment(appoinment.filter(item=>item.id != id))
  }

 
  const handleConsulted = (id) => {
    setAppoinment(appoinment.map(item => (item.id === id ? { ...item, consulted: true } : item)));
    
  };

  

  const handleFullDelete =()=>{
    setShow(true)
    setAppoinment([])
  }
  return (
    <>
      <div className='d-flex flex-column' >
        {appoinment.map(({ tname, sname, date, time, id, consulted }) => (
          
          <div key={id} onDoubleClick={()=>handleConsulted(id)} style={{position:"relative"}} >
           <div style={{ display: consulted ? "none" : "block", position: "absolute", top: "12px" }}>Consulted</div>
            <h1>{tname}</h1>
            <p>{sname}</p>
            <p>{date} - {time}</p>

            <div>
            <FontAwesomeIcon className='btn' icon="rocket" style={{ fontSize: '2em', color: 'blue' }} onClick={(()=>handleDelete(id))}  />

            
            </div>
           
          </div>
        ))}
         <div style={{display : appoinment.length==0 ? "none" : "block"}}><button className='btn btn-primary' onClick={handleFullDelete} style={{ display: show ? "none" : "block" }}>Temizle</button>
            
            </div>
      </div>
    </>
  );
}

export default AppoinmentList;