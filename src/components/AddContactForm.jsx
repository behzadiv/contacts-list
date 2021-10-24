import { useState } from "react";
import styles from "./AddContactForm.css"
const AddContact = ({addContact}) => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    
    const nameHandler =(e)=>{
        setName(e.target.value);
        //console.log(e.target.value);
    }
    const emailHandler =(e)=>{
        setEmail(e.target.value);
    }
    const addContactHandler=(e)=>{
        e.preventDefault()
        addContact(name,email)
    }
    return ( 
        <div className="form">
            <form onSubmit={addContactHandler}>
                <h2>Add Contact</h2>
                <div>
                    <label >Name</label>
                    <input type="text" onChange={nameHandler} placeholder="Name..."/ >
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={emailHandler} placeholder="Email..."/ >
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default AddContact;