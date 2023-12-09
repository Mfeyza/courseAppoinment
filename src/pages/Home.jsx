import React from 'react'
import Doctors from '../components/Doctors'
import AppoinmentList from '../components/AppoinmentList'
import {appointmentData, teacherData} from "../helper/data"
import { useState } from 'react'
import AddModal from '../components/AddModal'

const Home = () => {
  const [appoinment,setAppoinment]=useState(appointmentData)
  const [seciliTeacher,setSeciliTeacher]=useState([])
  return (
    <div>
      <div  className='d-flex justfy-contenr-center align-items-center flex-column'>
        <div className='mt-5 d-flex text-center flex-column'>
            <h1 className='text-danger'>CLARUSWAY</h1>
            <p className='fw-bold'>Our Teachers</p>

        </div>
        <div className='d-flex flex-wrap container-fluid justify-content-center align-items-center gap-5 p-5 '> 
        {teacherData.map((teacherData)=>(
            <Doctors teacher={teacherData} setSeciliTeacher={setSeciliTeacher}/>
        ))}

        </div>
        <AddModal appoinment={appoinment} setAppoinment={setAppoinment} seciliTeacher={seciliTeacher}/> 
        <AppoinmentList appoinment={appoinment} setAppoinment={setAppoinment}/>
    
    </div>
    </div>
  )
}

export default Home