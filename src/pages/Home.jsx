import React, { useEffect } from 'react'
import Teachers from '../components/Teachers'
import AppointmentList from '../components/AppointmentList'
import {appointmentData, teacherData} from "../helper/data"
import { useState } from 'react'
import AddModal from '../components/AddModal'
import NavbarC from "../components/Navbar/NavbarC"
import FooterC from '../components/FooterC'
import Swal from 'sweetalert2'




const Home = () => {
  const [appointment,setAppointment]=useState(appointmentData) //?randevu seçenleri eklicez başlangıç değeri appoinmentdata array i onun yanına eklenecek
  const [selectedTeacher,setSelectedTeacher]=useState([]) //?bu state teachers dan modal açılırken hangi öğretmeni seçtiğimi yakalıyor!! 
  const [teacher, setTeacher]=useState(teacherData) //? bu state teacherdan filtreleme yaptığımda setTeacher fonksionu ile state i günceller ve arama sonucuna göre filtrelenmiş öğretmen listesini oluşturur.
  const handleSearch = (e) => {
    let searchTeacher = e.target.value.toLowerCase();
    let filtTeacher = teacherData.filter((teacher) => {
      return teacher.tname.toLowerCase().includes(searchTeacher);
    });
    setTeacher(filtTeacher); //*burada filtrelenmiş öğretmenleri state in içine atıp dom a basıyorum.
    console.log(filtTeacher);
  };
  
  useEffect(()=>{
    Swal.fire({
     
      text: 'Hello Clarusway student welcome to the appointment screen!🎈',
      
      confirmButtonText: 'Cool',
      timer:3000
    })
  },[])

  return (
    <div>
     <NavbarC teacher={teacherData} handleSearch={handleSearch} setTeacherd={setTeacher} teacherd={teacher}/>
      <div  className='d-flex justfy-contenr-center align-items-center flex-column'>
        <div className='mt-5 d-flex text-center flex-column'>
        <div className='gif'>  
        <div className='titlecontainer'><p className="fw-bold fs-5">"Everything is static for React unless indicated otherwise"</p></div>
              
              </div>
            <p className='fw-bold mt-5 fs-2 '>Our Teachers</p>
            
         
           

        </div>
        <div className='d-flex flex-wrap container-fluid justify-content-center align-items-center gap-5 p-5 '> 
        {teacher.map((teacherData)=>(
            <Teachers key={teacherData.id} teacher={teacherData} setSelectedTeacher={setSelectedTeacher} setTeacher={setTeacher} teacherd={teacher}/> 
        ))}

        </div>
        <AddModal appointment={appointment} setAppointment={setAppointment} selectedTeacher={selectedTeacher}/> 
        
        <AppointmentList appointment={appointment} setAppointment={setAppointment}/>
        <FooterC />

    
    </div>
    </div>
  )
}

export default Home