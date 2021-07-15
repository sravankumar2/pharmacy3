import React from 'react';
const viewOrders=()=>{
    const orders=JSON.parse(localStorage.getItem("allOrders"))||[]
    return <div >
       <h2>SalesExecutive Orders</h2>
       <div>
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
            </div>
            })
        }
       </div>

    </div>
}
export default viewOrders