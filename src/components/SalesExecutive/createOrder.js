// import React,{useState} from 'react';
// import { connect } from 'react-redux'
// import { createOrder, emptyCart } from "../../actions/index";
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import { useHistory } from 'react-router';
// const CreateListOrder=({create_order})=>{
//     // const [selectedOption, setSelectedOption] = useState(null);
//     const[customerName,setCustomerName]=useState("");
//     const[contactNumber,setContactNumber]=useState("");
//     const[productName,setProductName]=useState("");
//     const[price,setPrice]=useState(0);
//     const[stock,setStock]=useState(0);
//     const[quantity,setQuantity]=useState(0)
//     const[total,setTotal]=useState(0)
//     const[discount,setDiscount]=useState(0)
//     const history=useHistory(null)
    
//     const productList=JSON.parse(localStorage.getItem("inventoryList"))||[]
//    console.log (productList)
//     const products=productList.map(item=>{return item.medicineName})
//     console.log(products)
//     const handleChange = e => {
//         alert(e.target.value)
//       const selectedProduct=productList.find(item=>{return item.medicineName=e.target.value})
//         console.log(selectedProduct)
//         setPrice(selectedProduct.price)
//         setStock(selectedProduct.stock)
//         setDiscount(selectedProduct.discount)
//         setProductName(e.target.value)

//       }
//       const increaseQuantity=()=>{
//           if(quantity<stock){
//           setQuantity(prevState => prevState + 1)
//           const amount=price*quantity-((price*quantity*discount)/100)
//           alert(amount)
//           setTotal(amount)
//           }
//       }
//       const decreaseQuantity=()=>{
//           if(quantity>0){
//         setQuantity(prevState => prevState - 1)
//         const amount=price*quantity-(price*quantity*discount/100)
//         setTotal(amount)
//           }
//     }
//     const handleForm= (e) => {
//         const orderDetails = { 
//             orderId: Math.floor((Math.random() * 100000000) + 1) ,
//             customerName: customerName,
//              cantactNumber: contactNumber, 
//              productName:productName,
//              price: price,
//              quantity:quantity,
//              total:total            
            
//             }

//         e.preventDefault();
       
       

//         createOrder(orderDetails)
//         var allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
//         allOrders.push(orderDetails);
//         localStorage.setItem('allOrders', JSON.stringify(allOrders));
//         alert("stock inserted successfully")
//         e.target[0].value = ''
//         e.target[1].value = ''
        
//         history.push("/sales/viewOrders")
//     }
//     return <div>
//         <form className="add_medicine_form" onSubmit={handleForm}>

//             <div className="form-group">
//                 <label htmlFor="medicineName">Customer Name</label>
//                 <input type="text" className="form-control" id="medicineName" placeholder="Customer Name" onChange={(e) => { setCustomerName(e.target.value) }} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="manufacturerName">ContactNumber</label>
//                 <input type="text" className="form-control" id="manufacturerName" placeholder="ContactNumber" pattern="[1-9]{1}[0-9]{9}" maxlength="10" onChange={(e) => { setContactNumber(e.target.value) }}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="medicinePrice"> Slect Product</label>
               
//              <select id="dropdown" placeholder="Select Product"  onChange={handleChange} >
                 
//                    {productList.map((item)=>{return <option value={item.medicineName}>{item.medicineName}</option>})}
//             </select>
      
//             </div>
//             <div className="form-group">
//             <label htmlFor="medicinePrice">Price per uint </label>
//                 <span>{price}</span>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="medicineInStock">Select Quantity</label>
//               <span>
//                   <RemoveIcon onClick={decreaseQuantity}/>
//                   <span>{quantity}</span>
//                   <AddIcon onClick={increaseQuantity}/>
//               </span>
//             </div>
//             <div className="form-group">
//             <label htmlFor="medicineInStock">Amount</label>
//                 <span>{total}</span>
//             </div>
           
           
//             <button type="submit" className="btn btn-primary">Create Order</button>
//         </form>
//     </div>
// }
// const mapStateToProps = (state) => ({
   
// })

// const mapDispatchToProps = (dispatch) => ({
//     create_order: (payload) => dispatch(createOrder(payload)),
   
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CreateListOrder)