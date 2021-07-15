import React, { useState } from 'react';

import { connect } from 'react-redux';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { updateInventoryDetails } from '../../actions';


const ViewStock=({inventoryList, update_inventory_details,inventory_list_after_delete_ById})=>{
 
  const [medicineId, setMedicineId] = useState('')
  const [medicineName, setMedicineName] = useState('')
  const [manufacturerName, setManufacturerName] = useState('')
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [discount, setDiscount] = useState("") 
  const handleEdit=(id)=>{    
    const popItem=inventoryList.find((prod) => prod.medicineId === id)
       
      setMedicineId(popItem.medicineId);
      setMedicineName(popItem.medicineName)
      setManufacturerName(popItem.manufacturerName)
      setPrice(popItem.price)
      setStock(popItem.stock)
      setDiscount(popItem.discount)    
     
    }
 
 const handleUpdate=(id)=>{
  if(id!==""){
  
   const inventoryListAfterUpdate= JSON.parse(localStorage.getItem('inventoryList')) ;
   alert(inventoryListAfterUpdate)
   const updatedIndex=inventoryListAfterUpdate.findIndex((prod) => prod.medicineId === id)
 
   inventoryListAfterUpdate[updatedIndex].medicineName=medicineName;
   inventoryListAfterUpdate[updatedIndex].manufacturerName=manufacturerName;
   inventoryListAfterUpdate[updatedIndex].price=price;
   inventoryListAfterUpdate[updatedIndex].stock=stock;
   inventoryListAfterUpdate[updatedIndex].discount=discount;   
   localStorage.setItem('inventoryList', JSON.stringify(inventoryListAfterUpdate));
   update_inventory_details(inventoryListAfterUpdate)
   }
   setMedicineId("")
   setMedicineName("")
   setManufacturerName("")
   setPrice("")
   setStock("")
   setDiscount("")

  }
  const removeStock=(id)=>{
    var inventoryListAfterDelete = JSON.parse(localStorage.getItem('inventoryList')) || [];
    inventoryListAfterDelete = inventoryListAfterDelete.filter(item => item.medicineId !== id)
    localStorage.setItem('inventoryList', JSON.stringify(inventoryListAfterDelete));
    inventory_list_after_delete_ById(inventoryListAfterDelete)    

  }
  
   
 
 return(
    <div>
      <table className="gridtable">
  <tr>
    <th>Medicine</th>
    <th>Manufacturer</th>
    <th>Price</th>
    <th>quantity</th>
    <th>Discount</th>
  </tr>
  <tr>
   
    <td><input type="text"  value={medicineName} onChange={(e) => { setMedicineName(e.target.value) }}></input></td>
    <td><input type="text" value={manufacturerName} onChange={(e) => { setManufacturerName(e.target.value) }}></input></td>
    <td><input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }}></input></td>
    <td><input type="text" value={stock} onChange={(e) => { setStock(e.target.value) }}></input></td>
    <td><input type="text" value={discount} onChange={(e) => { setDiscount(e.target.value) }}></input></td>
    <td><button onClick={()=>handleUpdate(medicineId)}>Update</button></td>
   
  </tr>
    <tbody>  {inventoryList.map(item =>{    
      return <tr key={item.medicineId}>
      <td>{item.medicineName}</td>
      <td>{item.manufacturerName}</td>
      <td>{item.price}</td>
      <td>{item.stock}</td>
      <td>{item.discount}</td>
      <td onClick={()=>handleEdit(item.medicineId)}><EditIcon/></td>
      <td onClick={()=>removeStock(item.medicineId)}><DeleteIcon/></td>
    </tr>
  })}
  </tbody>
</table>
    </div>
  )

}
const mapStateToProps = (state) => ({
  inventoryList: state.inventoryList,
 
})

const mapDispatchToProps = (dispatch) => ({
  update_inventory_details: (payload) => dispatch(updateInventoryDetails(payload)),
  inventory_list_after_delete_ById: (payload) => dispatch(updateInventoryDetails(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);