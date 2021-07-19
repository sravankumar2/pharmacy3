import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Admin from './components/Manager';
// import AddStock from './components/Manager/addStock';
// import Landing from './components/Landing';
// import StockView from "./components/Manager/viewStock";
// import AddSalesExec from "./components/Manager/addEmployee";
// import  ViewEmploee from "./components/Manager/viewEmployees";
// import ShowOrder from "./components/Manager/viewOrders";
// import CreateOrder from "./components/Manager/createOrder";
// import adminHome from './components/Manager/index';
import Home from './components/Home';
import { connect } from 'react-redux';
// import AddOrders from "./components/SalesExecutive/createOrder";
// import ViewOrderr from "./components/SalesExecutive/viewOrders"

import Man from "./components/Manager/index"
import AdminHome from './components/Manager';
import SalesHome from "./components/SalesExecutive"
import Landing from './components/Landing';

function App({ adminLogin, loginStatus, salesLogin }) {
  console.log(adminLogin)
  return (
    <div className="App">
    <Router>
    <Navbar/>
   
    
    <Switch>
          <Route path="/pharmacy1" exact><Home/></Route>
          {/* {!adminLogin && !loginStatus &&<Route path="/" exact><Home /></Route>} */}
          {/* <Route path="/login" exact><Home /></Route> */}
          {/* <Route path="/" exact><Login /></Route> */}
           { adminLogin && loginStatus && <Route path="/admin/adminHome"><AdminHome/> </Route>}
           {salesLogin && loginStatus && <Route path="/sales/salesHome"><SalesHome /></Route>}
         {/*adminLogin && loginStatus && <Route path="/admin/add_medicine"><StockView/> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_inventory"><AddStock /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_sales_executive"><AddSalesExec /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_team"><ViewEmploee /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/show_all_orders"><ShowOrder /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/create_orders"><CreateOrder /> </Route>}
          {/* {salesLogin && loginStatus && <Route path="/sales_executive/create_order"><CreateExecutiveOrder /></Route>} */}
          {/* {salesLogin && loginStatus && <Route path="/sales_executive/view_orders"><ViewOrders /> </Route>} */} 
          {/* {salesLogin&&loginStatus && <Route path="/sales/createOrder"><AddOrders/></Route>}
    {salesLogin&&loginStatus && <Route path="/sales/viewOrders"><ViewOrderr/></Route>}
    {!salesLogin && !loginStatus&&<Route path="/"><Home/></Route>} */}
        </Switch>
    </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  adminLogin: state.adminLogin,
  loginStatus: state.loginStatus,
  salesLogin: state.salesLogin
})


export default connect(mapStateToProps, null)(App)
