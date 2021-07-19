import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogout } from '../../actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180px',
    height:'90%',    
    margin:0,
    padding:0,
    position:'fixed',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:"#81BE82"
    
  },
  text:{
    marginLeft:theme.spacing(-2),
    paddingLeft:theme.spacing(-1),
  },
  nested: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    
  },
  links:{
    textDecoration:"none",
    color:"#FAFAFA"
  },
}));

const NestedList=({ logOutAdmin,loginStatus })=>{
  const classes = useStyles();
  const [stock, setStock] = React.useState(false);
  const [emp, setEmp] = React.useState(false);
  const [ord, setOrd] = React.useState(false);
  // const [loginStatus,setLoginStatus]=React.useState("true")
  const history = useHistory()
  const ihandleClick = (e) => {
    setStock(!stock);
  };
  const ehandleClick = () => {
    setEmp(!emp);
  };
  const ohandleClick = () => {
    setOrd(!ord);
  };
  const handleClick = () => {
    // setLoginStatus(!loginStatus);
   
                localStorage.setItem('loginStatus', false)
                localStorage.setItem('adminLogin', false)
                localStorage.setItem('salesLogin', false)
                logOutAdmin()
                // history.push("/pharmacy1")       
  };

  return (
      <>
    <List
    
      component="nav"
      aria-labelledby="nested-list-subheader"
   
      className={classes.root}
    >
     
      <ListItem button onClick={ihandleClick}>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" className={classes.text} />
        {stock ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={stock} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/admin/add_medicine" className={classes.links}>
          <ListItem button className={classes.nested}>          
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Medicine" className={classes.text}/>           
          </ListItem> 
          </Link>         
        </List>
      </Collapse>
      <Collapse in={stock} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/admin/view_stock" className={classes.links}>
          <ListItem button className={classes.nested}>          
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View Stock" className={classes.text}/>           
          </ListItem> 
          </Link>         
        </List>
      </Collapse>

      <ListItem button onClick={ehandleClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Executives" className={classes.text}/>
        {emp ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={emp} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/admin/add_sales_executive" className={classes.links}>
          <ListItem button className={classes.nested}>        
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Executive" className={classes.text}/>            
          </ListItem> 
          </Link>         
        </List>
      </Collapse>
      <Collapse in={emp} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/admin/view_team" className={classes.links}>
          <ListItem button className={classes.nested}>          
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View Executive" className={classes.text}/>            
          </ListItem>
          </Link>          
        </List>
      </Collapse>
      <ListItem button onClick={ohandleClick}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" className={classes.text}/>
        {ord ? <ExpandLess /> : <ExpandMore />}
      </ListItem>     
      <Collapse in={ord} timeout="auto" unmountOnExit>     
        <List component="div" disablePadding>
        <Link to="/admin/show_all_orders" className={classes.links}>
          <ListItem button className={classes.nested}>          
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View Orders" className={classes.text}/>           
          </ListItem> 
          </Link>         
        </List>
      </Collapse>
      <Collapse in={ord} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/admin/create_orders" className={classes.links}>
          <ListItem button className={classes.nested}>         
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Create Orders"className={classes.text} />           
          </ListItem> 
          </Link>         
        </List>
      </Collapse>
      <Link to="/pharmacy1"  className={classes.links}>
        <ListItem button onClick={handleClick}>        
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log-Out" className={classes.text}/>        
      </ListItem>
      </Link>
    </List>
    
    </>
  );
}
const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
  logOutAdmin: () => dispatch(adminLogout(''))

})

export default connect(mapStateToProps, mapDispatchToProps)(NestedList)