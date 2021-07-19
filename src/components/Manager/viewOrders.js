import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { updateAllOrders } from "../../actions/index";
import  styles from "../SalesExecutive/viewOrders.module.css" 
const AdminviewOrders=({allOrders, orders_list_after_delete})=>{
    const orders=JSON.parse(localStorage.getItem("allOrders"));   
    
    const removeStock=(id)=>{
       
        var ordersListAfterDelete = JSON.parse(localStorage.getItem('allOrders')) || [];
        ordersListAfterDelete = ordersListAfterDelete.filter(item => item.orderId !== id)
        localStorage.setItem('allOrders', JSON.stringify(ordersListAfterDelete));
        orders_list_after_delete(ordersListAfterDelete)  

    }

    return <div className={styles.container}>
    <h2>SalesExecutive Orders</h2>
    <table className={styles.gridTable}>
    <tr className={styles.header} >               
             <td >customerName</td>
             <td>contactNumber</td>
             <td >productName</td>
             <td>price</td>
             <td >quantity</td>
             <td >total</td>
         </tr>
     {
         orders.map((item,index)=>{
             return  <tr key={index}  className={styles.header}>               
             <td >{item.customerName}</td>
             <td>{item.contactNumber}</td>
             <td >{item.productName}</td>
             <td >{item.price}</td>
             <td >{item.quantity}</td>
             <td>{item.total}</td>
             <td onClick={()=>removeStock(item.orderId)} style={{cursor:"pointer"}}><DeleteIcon/></td>
         </tr>
         })
     }
    </table>

 </div>
    
    
}
const mapStateToProps = (state) => ({
    allOrders: state.allOrders
})

const mapDispatchToProps = (dispatch) => ({
    
    orders_list_after_delete: (payload) => dispatch(updateAllOrders(payload)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminviewOrders);

