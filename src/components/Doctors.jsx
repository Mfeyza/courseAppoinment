import React, { useState } from 'react'




const Doctors = ({teacher,setSeciliTeacher}) => { //burada teacher datasını getirdim , click olduğunda öğretmen seçtim
  // const [teacher,setTeacher]=useState("") 
  return (
    <>
    
        <div className='d-flex mt-5'key={teacher.id} >
        <div className="card" style={{width: "18rem", border:"none"}}>
  <img src={teacher.img} className="card-img-top btn" alt={teacher.img} 
  onClick={()=>setSeciliTeacher(teacher)}
  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
  <div className="card-body ">
    <h5 className="card-title">{teacher.tname}</h5>
    <p className="card-text">{teacher.dep}</p>
    
  </div>
</div>
</div>
        <div>

    </div>
    
    
    </>
  )
}

export default Doctors;