import React from 'react';
import styles from "./viewOrders.module.css"
const viewOrders=()=>{
    const orders=JSON.parse(localStorage.getItem("allOrders"))||[]
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
            </tr>
            })
        }
       </table>

    </div>
}
export default viewOrders