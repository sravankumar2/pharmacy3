import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addMedicine } from '../../actions/index';
import { useHistory } from 'react-router-dom';
import styles from "./addStock.module.css"
const AddStock=({ add_medicine_to_inventory })=>{
    const [medicineName, setMedicineName] = useState('')
    const [manufacturerName, setManufacturerName] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [discount, setDiscount] = useState(0)
    const history = useHistory()

    const handleFormSubmit = (e) => {
        const medicineDetails = { 
            medicineName: medicineName,
             manufacturerName: manufacturerName, 
             price: price, stock: stock, 
             discount: discount, 
             medicineId: Math.floor((Math.random() * 100000000) + 1) 
            }

        e.preventDefault();
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''

        add_medicine_to_inventory(medicineDetails)
        var inventoryList = JSON.parse(localStorage.getItem('inventoryList')) || [];
        inventoryList.push(medicineDetails);
        localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
        alert("stock inserted successfully")
        history.push("/admin/view_stock")
    }
    return (
        <div id={styles.loginform}>
            <h2 id={styles.headerTitle}>Medicine Form</h2>  
                <form onSubmit={handleFormSubmit}>  
                    <div className={styles.row}>
                        <label>Medicine Name</label>
                        <input type="text" name="text" required placeholder="Medicine name" onChange={(e) => { setMedicineName(e.target.value) }} />
                    </div>
                    <div className={styles.row}>
                        <label>Manufacturer Name</label>
                        <input type="text" required placeholder="Manufacturer Name" onChange={(e) => { setManufacturerName(e.target.value) }} />
                    </div>
                    <div className={styles.row}>
                        <label >Price(INR)</label>
                        <input type="text" required placeholder="price" onChange={(e) => { setPrice(e.target.value) }} />
                    </div>
                    <div className={styles.row}>
                        <label >Stock</label>
                        <input type="number" min="0" required placeholder="Available quantity" onChange={(e) => { setStock(e.target.value) }} />
                    </div>
                    <div className={styles.row}>
                        <label>Discount (%)</label>
                        <input type="number" min="0" max="100" required placeholder="Discount in percent" onChange={(e) => { e.target.value<100 && setDiscount(e.target.value) }} />
                    </div>
                    <div className={styles.row}>
                        <button type="submit">Add to the Inventory</button>
                    </div>
                </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    add_medicine_to_inventory: (payload) => dispatch(addMedicine(payload))
})

export default connect(null, mapDispatchToProps)(AddStock)