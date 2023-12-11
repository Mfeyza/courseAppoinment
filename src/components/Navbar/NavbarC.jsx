import React from 'react'
import logo from "./logo.png"

const NavbarC = ({teacher, handleSearch, setTeacher,teacherd}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
   
  };
  return (
    <div>
      <nav class="navbar navbark navbar-expand-lg  d-flex">
    <div class="container-fluid p-4 fs-5">
    <img src={logo} alt="Logo" width="60" height="40" class="d-inline-block align-text-top"/>CLARUSWAY

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ms-5">
            <a class="nav-link disabled" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5 " href="#">Appoinment Page</a>
          </li>
         
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
          <button class="btn navbtn me-5" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default NavbarC