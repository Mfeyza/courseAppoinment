import React from 'react';

const AppoinmentList = ({ appoinment, setAppoinment }) => {
  return (
    <>
      <div>
        {appoinment.map(({ tname, sname, date, time, id }) => (
          <div key={id}>
            <h1>{tname}</h1>
            <p>{sname}</p>
            <p>{date} - {time}</p>
            <div>
              <span>abcd<i className="fa-duotone fa-trash"></i></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AppoinmentList;