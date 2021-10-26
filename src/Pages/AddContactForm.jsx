import { useState } from "react";
import styles from "./AddContactForm.css"
const AddContact = ({addContact ,history}) => {
    
    const[contact,setContact]=useState({name:"",email:""})
    const changeHandler =(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
        //console.log(e.target.value);
    }
    //console.log(history);
    
    const addContactHandler=(e)=>{
        e.preventDefault()
        addContact(contact)
        history.push("/")
    }
    return ( 
        <div className="form">
            <form onSubmit={addContactHandler}>
                <h2>Add Contact</h2>
                <div>
                    <label >Name</label>
                    <input type="text" onChange={changeHandler} placeholder="Name..." name="name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={changeHandler} placeholder="Email..." name="email" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default AddContact;