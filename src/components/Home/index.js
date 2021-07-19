import React from 'react';
import Man from "../Manager/index";
import Sales from "../SalesExecutive/index";
import Login from '../Login';

import { connect } from 'react-redux'
import Landing from '../Landing/index';
import { Route } from 'react-router-dom';


const Home = ({ loginStatus, adminLogin, salesLogin }) => {
   
    return (<div style={{margin:"0px"}}>
        {adminLogin === true && loginStatus === true && <Man />}
        {salesLogin === true && loginStatus === true && <Sales />}
        {loginStatus === false && <Landing/>}
    </div>);
}


const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus,
    adminLogin: state.adminLogin,
    salesLogin: state.salesLogin
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)