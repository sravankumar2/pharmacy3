import React,{useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Select from 'react-select';
import { selectedOptions } from '../../actions';
import Login from '../Login';
import { connect } from 'react-redux';
import { adminLogin, salesLogin,loginStatus} from "../../actions";
import "./landing.css";
import { useHistory } from 'react-router-dom';
const Landing=({adminLogin, salesLogin,loginStatus})=>{
    if (loginStatus !== 'false'|| adminLogin !== 'false' || salesLogin !== 'false') {
        localStorage.setItem('loginStatus', "false");
        localStorage.setItem('adminLogin', "false");
        localStorage.setItem('salesLogin', "false")
    }
    const [selectedOption, setSelectedOption] = useState(null);
    const history=useHistory()
    const handleChange = e => {
        setSelectedOption(e); 
            
        
      }
    //  style={{marginTop:"85px",padding:"0 10px",maxWidth:"350px",marginLeft:"auto",marginRight:"auto"}}
    return <div className="landing" >
         <Select className="dropdown"
        placeholder="Select User"
        value={selectedOption} 
        options={[{value:1,label:"Admin"},{value:2,label:"SalesExecutive"}]}
        onChange={handleChange} 
      />
     
      {
          selectedOption && <Login userData={selectedOption}/>
      }
     
    </div>
}
export default Landing