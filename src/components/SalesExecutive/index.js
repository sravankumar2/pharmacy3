import React from 'react';
import { BrowserRouter,Switch,Route, Link} from 'react-router-dom';
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
      <BrowserRouter>
    <h2>SalesExecutive</h2>
    <div>
         <span><Link to="/createOrder">Create Order</Link></span>
         <span><Link to="/sales/viewOrders">View Orders</Link></span>
         <span onClick={handleClick}><Link to="/pharmacy1">LogOut</Link></span>
    </div>
    <div>
     
      <Switch>
    {salesLogin&&loginStatus && <Route path="/createOrder"><AddOrders/></Route>}
    {salesLogin&&loginStatus && <Route path="/sales/viewOrders"><ViewOrderr/></Route>}
    {!salesLogin && !loginStatus&&<Route path="/pharmacy1"><Home/></Route>}
    </Switch>
    
    </div>
    </BrowserRouter>
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