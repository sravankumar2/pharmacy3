import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { updateAllOrders } from "../../actions/index";
import "./viewOrders.css" 
const AdminviewOrders=({allOrders, orders_list_after_delete})=>{
    const orders=JSON.parse(localStorage.getItem("allOrders"));   
    
    const removeStock=(id)=>{
       
        var ordersListAfterDelete = JSON.parse(localStorage.getItem('allOrders')) || [];
        ordersListAfterDelete = ordersListAfterDelete.filter(item => item.orderId !== id)
        localStorage.setItem('allOrders', JSON.stringify(ordersListAfterDelete));
        orders_list_after_delete(ordersListAfterDelete)  

    }

    return <div>
                <h2>All Orders</h2>
                 
                     <div className="medicine-card" >               
                       <span className="manufacturer-name">customerName</span>
                       <span className="medicine-price">contactNumber</span>
                      <span className="medicine-quantity">productName</span>
                      <span className="medicine-discount">price</span>
                     <span className="medicine-discount">quantity</span>
                     <span className="medicine-discount">total</span>
                   </div>
        {
            
            orders.map((item,index)=>{
                return  <div className="medicine-card" key={index} >               
                <span className="manufacturer-name">{item.customerName}</span>
                <span className="medicine-price">{item.contactNumber}</span>
                <span className="medicine-quantity">{item.productName}</span>
                <span className="medicine-discount">{item.price}</span>
                <span className="medicine-discount">{item.quantity}</span>
                <span className="medicine-discount">{item.total}</span>              
                <span> <td onClick={()=>removeStock(item.orderId)}><DeleteIcon/></td></span>
             </div>
            
            })
        }
       

    </div>
    
}
const mapStateToProps = (state) => ({
    allOrders: state.allOrders
})

const mapDispatchToProps = (dispatch) => ({
    
    orders_list_after_delete: (payload) => dispatch(updateAllOrders(payload)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminviewOrders);

