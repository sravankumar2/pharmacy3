import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addSalesExecutive } from '../../actions/index'
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

        add_executive_to_team(executiveDetails)
        var empList = JSON.parse(localStorage.getItem('empList')) || [];
        empList.push(executiveDetails);
        localStorage.setItem('empList', JSON.stringify(empList));
    }


    return(
    <div>
        <form className="add_medicine_form" onSubmit={handleFormSubmit}>

            <div className="form-group">
                <label htmlFor="medicineName">First Name</label>
                <input type="text" className="form-control" id="medicineName" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div className="form-group">
                 <label htmlFor="manufacturerName">Last Name</label>
                 <input type="text" className="form-control" id="manufacturerName" placeholder="Last Name " onChange={(e) => { setLastName(e.target.value) }}/>
            </div>
            <div className="form-group">
                 <label htmlFor="manufacturerName">DOB</label>
                 <input type="date" className="form-control" id="manufacturerName" placeholder="DOB" onChange={(e) => { setDob(e.target.value) }}/>
            </div>
            <div className="form-group">
            <input type="radio" value="male" id="male" onChange={(e)=>{setGender(e.target.value)}} name="gender" />
            <label for="male">Male</label>

            <input type="radio" value="female" id="female" onChange={(e)=>{setGender(e.target.value)}} name="gender"/>
            <label for="female">Female</label>                
            </div>
            <div className="form-group">
                 <label htmlFor="manufacturerName">Experience</label>
                 <input type="number" className="form-control" id="manufacturerName" placeholder="Experience"  onChange={(e)=>{setExperience(e.target.value)}}  />
            </div>
            <button type="submit" className="btn btn-primary">Add Executive</button>
        </form>
    </div>
    )}

const mapDispatchToProps = (dispatch) => ({
    add_executive_to_team: (payload) => dispatch(addSalesExecutive(payload))
})

export default connect(null, mapDispatchToProps)(AddEmployee)