import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';
import AddOrders from "../Manager/createOrder";
import ViewOrderr from "./viewOrders"
import {salesLogout} from "../../actions"
import { useHistory } from 'react-router-dom';

const SalesExecutive=( {loginStatus, salesLogin,logOutSales,adminLogin })=>{
    const history=useHistory()

    const handleClick = () => {
                    localStorage.setItem('loginStatus', false)
                    localStorage.setItem('adminLogin', false)
                    localStorage.setItem('salesLogin', false)                   
                    logOutSales()
                    history.push("/pharmacy1")
           
      };
    return <div id="sales-home" style={{marginTop:"80px"}}>
      <Router>
    <h2 style={{color:"#fff"}}>SalesExecutive</h2>
    <div>
         <span style={{border:"1px solid #ccc",padding:"5px",marginRight:"5px",cursor:"pointer"}}><Link to="/createOrder" style={{textDecoration:"none"}}>Create Order</Link></span>
         <span style={{border:"1px solid #ccc",padding:"5px",marginRight:"5px",cursor:"pointer"}}><Link to="/sales/viewOrders"style={{textDecoration:"none"}}>View Orders</Link></span>
         <span style={{border:"1px solid #ccc",padding:"5px",marginRight:"5px",cursor:"pointer"}} onClick={handleClick}><Link to="/pharmacy1"style={{textDecoration:"none"}}>LogOut</Link></span>
    </div>
    <div style={{margin:"15px"}}>
     
      <Switch>
    {salesLogin&&loginStatus && <Route path="/createOrder"><AddOrders/></Route>}
    {salesLogin&&loginStatus && <Route path="/sales/viewOrders"><ViewOrderr/></Route>}
    {!salesLogin && !loginStatus&&<Route path="/pharmacy1"><Home/></Route>}
    </Switch>
    
    </div>
    </Router>
</div>
}

const mapStateToProps = (state) => ({
  adminLogin: state.adminLogin,
  loginStatus: state.loginStatus,
  salesLogin: state.salesLogin
})
const mapDispatchToProps = (dispatch) => ({
    logOutSales: () => dispatch(salesLogout(''))
  
  })


export default connect(mapStateToProps, mapDispatchToProps)(SalesExecutive)