import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "./index.css"
const Navbar=()=>{   
    return <div className="top-bar">
        <img className="logo" src="/logo.jpg" alt="pharmacy-logo"/>               
        <h2 className="text-logo">PHARMACY STORE</h2>
        <img src="/medicine.jpg" alt="avatar"/>

        
    </div>
    
   
}
export default Navbar