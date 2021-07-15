import React,{useState} from 'react';
import { connect } from 'react-redux'
import { createOrder, emptyCart } from "../../actions/index";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
        setPrice(0)
        setQuantity(0)
        setProductName("")
        
        alert( "Oreder created successfully")
    }
    return <div>
        <form className="add_medicine_form" onSubmit={handleForm}>

            <div className="form-group">
                <label htmlFor="medicineName">Customer Name</label>
                <input type="text" required className="form-control" value={customerName} placeholder="Customer Name" onChange={(e) => { setCustomerName(e.target.value) }} />
            </div>
            <div className="form-group">
                <label htmlFor="manufacturerName">ContactNumber</label>
                <input type="text" required className="form-control" value={contactNumber} placeholder="ContactNumber" pattern="[1-9]{1}[0-9]{9}" maxlength="10" onChange={(e) => { setContactNumber(e.target.value) }}/>
            </div>
            <div className="form-group">
                <label htmlFor="medicinePrice"> Slect Product</label>
               
             <select id="dropdown" required placeholder="Select Product"  onChange={(e)=>handleChange(e)} >
                            <option></option>
                   {productList.map((item)=>{return <option value={item.medicineName}>{item.medicineName}</option>})}
            </select>
      
            </div>
            <div className="form-group">
            <label htmlFor="medicinePrice">Price per uint </label>
                <span>{price}</span>
            </div>
            <div className="form-group">
                <label htmlFor="medicineInStock">Select Quantity</label>
              <span>
                  <RemoveIcon onClick={decreaseQuantity}/>
                  <span>{quantity}</span>
                  <AddIcon onClick={increaseQuantity}/>
              </span>
            </div>
            {/* <div className="form-group">
            <label htmlFor="medicineInStock">Amount</label>
                <span>{total}</span>
            </div> */}
           
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}
const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (dispatch) => ({
    create_order: (payload) => dispatch(createOrder(payload)),
   
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateListOrder);
 