import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateExecutiveDetails } from '../../actions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./viewStock.module.css"

const ViewEmployee=({ teamList, team_list_after_delete,update_executive_details})=>{
    console.log(teamList)
    const [salesExecutiveId, setSalesExecutiveId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")
  const [experience, setExperience] = useState("")
    const handleEdit=(id)=>{  
        const popItem=teamList.find((prod) => prod.salesExecutiveId === id)       
        setFirstName(popItem.firstName);
        setLastName(popItem.lastName)
        setGender(popItem.gender)
        setDob(popItem.dob)
        setExperience(popItem.experience)
        setSalesExecutiveId(popItem.salesExecutiveId)
       
    }
    const removeStock=(id)=>{
        var empListAfterDelete = JSON.parse(localStorage.getItem('empList')) || [];
        empListAfterDelete = empListAfterDelete.filter(item => item.salesExecutiveId !== id)
        localStorage.setItem('empList', JSON.stringify(empListAfterDelete));
        team_list_after_delete(empListAfterDelete)    

    }
    const handleUpdate=(id)=>{
     
       if(id!==""&& firstName!==""&&lastName!==""&&gender!==""&&dob!==""&&experience!==""){
           alert("ajj")
        const empListAfterUpdate= JSON.parse(localStorage.getItem('empList')) ;
        alert(empListAfterUpdate)
        const updatedIndex=empListAfterUpdate.findIndex((prod) => prod.salesExecutiveId === id)
      
        empListAfterUpdate[updatedIndex].firstName=firstName;
        empListAfterUpdate[updatedIndex].lastName=lastName;
        empListAfterUpdate[updatedIndex].gender=gender;
        empListAfterUpdate[updatedIndex].dob=dob;
        empListAfterUpdate[updatedIndex].experience=experience;   
        localStorage.setItem('empList', JSON.stringify(empListAfterUpdate));
        update_executive_details(empListAfterUpdate)
        }
        setFirstName("")
        setLastName("")
        setGender("")
        setDob("")
        setExperience("")    
       
   
    }
    return(
        <div className={styles.tableWrapper}>
          <table className={styles.gridTable}>
          <caption>Executive Details</caption>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Experience</th>
            </tr>
            <tr>    
               <td><input type="text" required value={firstName} onChange={(e) => { setFirstName(e.target.value) }}></input></td>
              <td><input type="text" required value={lastName} onChange={(e) => { setLastName(e.target.value) }}></input></td>
              <td><input type="text" required value={gender} onChange={(e) => { setGender(e.target.value) }}></input></td>
              <td><input type="date" required value={dob} onChange={(e) => { setDob(e.target.value) }}></input></td>
              <td><input type="Number" required value={experience} onChange={(e) => { setExperience(e.target.value) }}></input></td>
              <td><button onClick={()=>handleUpdate(salesExecutiveId)}>Update</button></td>
            </tr>
            <tbody>  {teamList.map(item =>{    
                return <tr key={item.salesExecutiveId}>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.gender}</td>
                          <td>{item.dob}</td>
                          <td>{item.experience}</td>
                          <td onClick={()=>handleEdit(item.salesExecutiveId)}><EditIcon/></td>
                          <td onClick={()=>removeStock(item.salesExecutiveId)}><DeleteIcon/></td>
                        </tr>
                      })}
            </tbody>
          </table>
        </div>
      )
  
  }
  const mapStateToProps = (state) => ({
    teamList: state.teamList,
   
  })
  
  const mapDispatchToProps = (dispatch) => ({
    update_executive_details: (payload) => dispatch(updateExecutiveDetails(payload)),
    team_list_after_delete: (payload) => dispatch(updateExecutiveDetails(payload)),
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);