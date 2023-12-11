import React from 'react'
import { useState } from 'react';


const AddModal = ({ selectedTeacher, appointment, setAppointment }) => {
  const [selected, setSelected] = useState("");
  const [modalData, setModalData] = useState({
    tname: "",
    sname: "",
    date: "",
    selected: "",
    id: "",
    img: "",
  });
 

  const { sname, date} = modalData;

 
  console.log(modalData);

  const handleSave = () => {
    if(modalData.sname===""|| modalData.date ===""){
      alert("Tüm alanları doldurunuz")
        setModalData({
        date: "",
        sname: "",
        tname: "",
        selected: "",
        consulted: false,
      });
        
      
     
    }else {
     
      const repeatAppointment = appointment.find(
        (item) =>
          item.sname === modalData.sname &&
          item.date === modalData.date &&
          item.selected === selected
      );
  
      if (repeatAppointment) {
        alert("Bu randevu zaten eklenmiş.");
      } else {
        setAppointment([
          ...appointment,
          { ...modalData, ...selectedTeacher, id: new Date().getTime(), consulted: false, selected },
        ]);
  
        // Modal verilerini temizle
        setModalData({ 
          date: "",
          sname: "",
          tname: "",
          selected: "",
          consulted: false,
        });
      }
    }
  };
   
    
  ;
  console.log(selected);

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalLabel"><strong>{selectedTeacher?.tname}💫</strong></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body  ">
              <div className="input-group mb-3 d-flex flex-column g-5">
                <div className='d-flex flex-row g-5'>
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                    htmlFor="sname"
                  >
                   <strong>Student Name</strong> 
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="sname"
                    name="sname"
                    value={sname || ""}
                    onChange={(e) => setModalData({ ...modalData, [e.target.name]: e.target.value })}
                  />
                </div>
                <div className='flex-row g-5'>
                <div className='d-flex flex-row g-5'>
                  <span className="input-group-text" id="inputGroup-sizing-default"><strong>Day/Time</strong></span>
                  <input
                    type="date"
                    className="form-control "
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={date || ""}
                    id="date"
                    onChange={(e) => setModalData({ ...modalData, [e.target.name]: e.target.value })}
                    name="date"
                  />
               
                </div>
                <select
                  onChange={(e) => { setSelected(e.target.value); }}
                  className="form-select"
                  aria-label="Default select example"
                  name="selected"
                  value={selected}
                  
                  
                 
                >
                  <option  value="" disabled >Select the time</option>
                  <option >09-10</option>
                  <option >10-11</option>
                  <option >11-12</option>
                  <option >13-14</option>
                  <option >14-15</option>
                  <option >15-16</option>
                  <option >16-17</option>
                  <option >17-18</option>
                </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-modal2 btn-primary" data-bs-dismiss="modal" onClick={handleSave}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;