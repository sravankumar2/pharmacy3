import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sidebar from "./sidebar";
import AddStock from "./addStock";
import ViewStock from "./viewStock";
import AddEmploye from "./addEmployee";
import  ViewEmployes from "./viewEmployes";
import ShowOrders from "./viewOrders";
import CreateOrder from "./createOrder";
import { connect } from 'react-redux';
import Home from '../Home/index';
import "./index.css"


const AdminHome=({ adminLogin, loginStatus, salesLogin })=>{ 
   
  return <div id="admin-home">
   
    <Router>
    <Sidebar/>
    {console.log(adminLogin, loginStatus,salesLogin)}
    <div className="admin-home-rightContainer">
      <Switch>
          {adminLogin && loginStatus && <Route path="/admin/view_stock"><ViewStock/> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_medicine"><AddStock /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_sales_executive"><AddEmploye /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_team"><ViewEmployes /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/show_all_orders"><ShowOrders /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/create_orders"><CreateOrder /> </Route>} 
          {!adminLogin && !loginStatus && <Route path="/pharmacy3"><Home/></Route>}
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


export default connect(mapStateToProps, null)(AdminHome)