import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addSalesExecutive } from '../../actions/index';
import styles from "./addEmp.module.css";
const AddEmployee=({ add_executive_to_team })=>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [experience, setExperience] = useState(0)
    const handleFormSubmit = (e) => {
        const executiveDetails = { firstName: firstName, lastName: lastName, dob: dob, gender: gender, experience: experience, salesExecutiveId: Math.floor((Math.random() * 100000000) + 1) }
        e.preventDefault();
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        e.target[5].value=''
        e.target[6].value=''
        add_executive_to_team(executiveDetails)
        var empList = JSON.parse(localStorage.getItem('empList')) || [];
        empList.push(executiveDetails);
        localStorage.setItem('empList', JSON.stringify(empList));
    }

    return(
        <div id={styles.loginform}>
             <h2 id={styles.headerTitle}>Employee Registration</h2>  
            <form onSubmit={handleFormSubmit}>
           
            <div className={styles.row}>
                <label>First Name</label>
                <input type="text"  required placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div className={styles.row}>
                 <label>Last Name</label>
                 <input type="text"  required placeholder="Last Name " onChange={(e) => { setLastName(e.target.value) }}/>
            </div>
            <div className={styles.row}>
                 <label >DOB</label>
                 <input type="date"  required placeholder="DOB" onChange={(e) => { setDob(e.target.value) }}/>
            </div>
            <div className={styles.rowRadio}>
                <div>
            <label>Gender</label>
            <input type="radio" value="male"  required  onChange={(e)=>{setGender(e.target.value)}} name="gender" />
            <label for="male">Male</label>

            <input type="radio" value="female" required onChange={(e)=>{setGender(e.target.value)}} name="gender"/>
            <label>Female</label> 
            </div>               
            </div>
            <div className={styles.row}>
                 <label >Experience</label>
                 <input type="number" required placeholder="Experience"  onChange={(e)=>{setExperience(e.target.value)}}  />
            </div>
            <div id="button" className={styles.row}>
                <button type="submit">Add Executive</button>
            </div>
        </form>
    </div>
    )}

const mapDispatchToProps = (dispatch) => ({
    add_executive_to_team: (payload) => dispatch(addSalesExecutive(payload))
})

export default connect(null, mapDispatchToProps)(AddEmployee)