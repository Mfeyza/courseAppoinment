import React from 'react'
import Teachers from '../components/Teachers'
import AppoinmentList from '../components/AppoinmentList'
import {appointmentData, teacherData} from "../helper/data"
import { useState } from 'react'
import AddModal from '../components/AddModal'
import NavbarC from "../components/Navbar/NavbarC"
import FooterC from '../components/FooterC'




const Home = () => {
  const [appoinment,setAppoinment]=useState(appointmentData) //randevu seçenleri eklicez başlangıç değeri appoinmentdata array i onun yanına eklenecek
  const [selectedTeacher,setSelectedTeacher]=useState([]) //bu state doctors dan hangi öğretmeni seçtiğimi yakalıyor!! 
  return (
    <div>
      <NavbarC/>
      <div  className='d-flex justfy-contenr-center align-items-center flex-column'>
        <div className='mt-5 d-flex text-center flex-column'>
            <h1 className='text-danger'>CLARUSWAY</h1>
            <p className='fw-bold'>Our Teachers</p>

        </div>
        <div className='d-flex flex-wrap container-fluid justify-content-center align-items-center gap-5 p-5 '> 
        {teacherData.map((teacherData)=>(
            <Teachers key={teacherData.id} teacher={teacherData} setSelectedTeacher={setSelectedTeacher}/> 
        ))}

        </div>
        <AddModal appoinment={appoinment} setAppoinment={setAppoinment} selectedTeacher={selectedTeacher}/> 
        <AppoinmentList appoinment={appoinment} setAppoinment={setAppoinment}/>
        <FooterC />

    
    </div>
    </div>
  )
}

export default Home