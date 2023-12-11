import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faRocket);
const AppointmentList = ({ appointment, setAppointment }) => {
const [show,setShow]=useState(false)
const [consult, SetConsult]=useState(false)

  const handleDelete=(id)=>{
    setAppointment(appointment.filter(item=>item.id != id)) //iterasyonla id ye göre filtrele ve sil , kalanı koru
  }

 
  const handleConsulted = (id) => {
    setAppointment(appointment.map(item => (item.id === id ? { ...item, consulted:!item.consulted } : item)));
     //id ye göre consulted yap itere et.
    
  };

  

  const handleFullDelete =()=>{
    
    setAppointment([])
  }

  
  return (
    <>
     

<button class="btn btn-cnvs" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Appointments</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header d-flex text-center">
    <h5 class="offcanvas-title fs-4" id="offcanvasRightLabel"><strong>Appointments</strong></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body flex-column ">
  <div className='d-flex flex-column fs-5 ' >
        {appointment.map(({ tname, sname, date, time, id, consulted,selected }) => (
          
          <div className='d-flex flex-column' key={id} onDoubleClick={()=>{handleConsulted(id)}} style={{position:"relative"}}  >
           <div className='flex-row consultedDiv-btn mt-5 p-2' style={{ display: consulted ? "block" : "none", position: "absolute", top: "12px" }}>Consulted✔️</div>
           <hr />
            <p><strong>Student Name:</strong>{sname}</p>
            <p><strong>Teacher Name:</strong>{tname}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong>{selected} </p> 

           
            <div>
           
           <FontAwesomeIcon className='btn btn-icon' icon="rocket"  onClick={(()=>handleDelete(id))}  />
           
           </div>
          </div>
         
        ))}
         <div className='mt-5'data-bs-dismiss="offcanvas" style={{display : appointment.length==0 ? "none" : "block"}}><button className='btn btnTemizle' onClick={handleFullDelete} style={{ display: show ? "none" : "block" }}>Temizle</button>
            
            </div>
      </div>
  </div>
</div>
    </>
  );
}

export default AppointmentList;