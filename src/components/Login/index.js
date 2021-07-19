import React,{useEffect, useState} from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogin, salesLogin} from "../../actions"
const Login=(props)=>{
 const user= props.userData.value
  console.log(props.userData.value)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState(localStorage.getItem('loginStatus') || false);
  // const [isAdmin, setIsAdmin] = useState(true);
  // const [isEmployee, setIsEmployee] = useState(false);
  const history = useHistory();

  if (loginStatus !== 'false') {
    localStorage.setItem('loginStatus', loginStatus)
  }
 
  const handleLogin=(e)=>{
    e.preventDefault()   
    if (props.userData.value==1) {
        if (loginEmail === "test-admin" && loginPassword === "test-admin") {
            setLoginStatus(true)
            localStorage.setItem('loginStatus', true)
            localStorage.setItem('adminLogin', true)
            history.push('/admin/adminHome')
            props.adminSignedIn()
            alert("success")
            
        } else {
            alert("Invalid ggcredentials!")
        }
    } else {
        if (loginEmail === "test-sales" && loginPassword === "test-sales") {
            setLoginStatus(true)
            localStorage.setItem('loginStatus', true)
            localStorage.setItem('salesLogin', true)
            history.push('/sales/salesHome')
            props.salesSignedIn()
            alert("success2")

        } else {
            alert("Invalid credentials!")
        }
    }
  }
    return (      
        <div id="loginform">
           <form onSubmit={handleLogin}>
               <h2 id="headerTitle">{props.userData.label} Login</h2>     
               <div className="row">
                  <label>Username</label>
                  <input type="text" placeholder="Enter your username" required onChange={(eVal) => setLoginEmail(eVal.target.value)} />
                </div> 
                <div className="row">
                  <label>Password</label>
                  <input type="password" placeholder="Enter your password" required onChange={(pVal) => {setLoginPassword(pVal.target.value)}}/>
                </div> 
                <div id="button" className="row">
                  <button type='submit'>Login</button>
                </div>
            </form>
        </div>
        )
}
const mapDispatchToProps = (dispatch) => ({

  adminSignedIn: () => dispatch(adminLogin('')),
  salesSignedIn: () => dispatch(salesLogin(''))

})

export default connect(null, mapDispatchToProps)(Login)