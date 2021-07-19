import React,{useState} from 'react';
import { connect } from 'react-redux'
import { createOrder} from "../../actions/index";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from "./createOrder.module.css";


const CreateListOrder=()=>{
    
    const[customerName,setCustomerName]=useState("");
    const[contactNumber,setContactNumber]=useState("");
    const[productName,setProductName]=useState("");
    const[price,setPrice]=useState(0)
    const[stock,setStock]=useState(0);
    const[quantity,setQuantity]=useState(0)    
    const[discount,setDiscount]=useState(0)   
    
    const productList=JSON.parse(localStorage.getItem("inventoryList")) || []  
   
    const handleChange = (e) => {
        
      const index=productList.findIndex(item=>{return item.medicineName===e.target.value})
      
        setPrice(productList[index].price)       
        setStock(productList[index].stock)
        setDiscount(productList[index].discount)
        setProductName(e.target.value)

      }
      const increaseQuantity=()=>{
          if(quantity<=stock){
          setQuantity(prevState => prevState + 1)
       
          }
      }
      const decreaseQuantity=()=>{
          if(quantity>0){
        setQuantity(prevState => prevState - 1)
       
          }
    }
    const handleForm= (e) => {
        const orderDetails = { 
            orderId: Math.floor((Math.random() * 100000000) + 1) ,
            customerName: customerName,
             cantactNumber: contactNumber, 
             productName:productName,
             price: price,
             quantity:quantity,
             total:(price*quantity)-((price*quantity*discount)/100)           
            
            }
            e.preventDefault(); 

        createOrder(orderDetails)
        var newOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        newOrders.push(orderDetails);
        localStorage.setItem('allOrders', JSON.stringify(newOrders));
        
       
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        setPrice(0)
        setQuantity(0)
        setProductName("")        
        alert( "Oreder created successfully")
        
    }
    return (
        <div id={styles.loginform}>
        <h2 id={styles.headerTitle}>Create Order Form</h2>  
            <form onSubmit={handleForm}>  
                <div className={styles.row}>
                <label>Customer Name</label>
                <input type="text" required  value={customerName} placeholder="Customer Name" onChange={(e) => { setCustomerName(e.target.value) }} />
            </div>
            <div className={styles.row}>
                <label>ContactNumber</label>
                <input type="text" required  value={contactNumber} placeholder="ContactNumber" pattern="[1-9]{1}[0-9]{9}" maxlength="10" onChange={(e) => { setContactNumber(e.target.value) }}/>
            </div>
            <div className={styles.row}>
                <label> Slect Product</label>
               
             <select className={styles.dropdown} required placeholder="SelectProduct"  onChange={(e)=>handleChange(e)} >
                            <option></option>
                   {productList.map((item)=>{return <option value={item.medicineName}>{item.medicineName}</option>})}
            </select>
      
            </div>
            <div className={styles.row}>    
            <label>Price per uint </label>
                {/* <span>{price}</span> */}
                <input type="number" required  value={price} readOnly/>
            </div>
            <div className={styles.row}>
                <label >Select Quantity</label>
              <span  style={{position:"relative"}}>
                  <RemoveIcon onClick={decreaseQuantity}  style={{width:"25px",height:"25px",padding:"2px",marginRight:"5px",backgroundColor:"#ccc"}}/>
                  <span style={{padding:"8px",position:"absolute",top:"0"}}>{quantity}</span>
                  <AddIcon onClick={increaseQuantity} style={{width:"25px",height:"25px",padding:"2px",marginLeft:"30px",backgroundColor:"#ccc"}}/>
              </span>
            </div>
            {/* <div className="form-group">
            <label htmlFor="medicineInStock">Amount</label>
                <span>{total}</span>
            </div> */}
           
           <div className={styles.row}>
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
}
const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (dispatch) => ({
    create_order: (payload) => dispatch(createOrder(payload)),
   
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateListOrder);
 