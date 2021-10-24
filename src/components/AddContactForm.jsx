import { useState } from "react";

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
        <div>
            <form onSubmit={addContactHandler}>
                <h2>New Contact</h2>
                <div>
                    <label >Name</label>
                    <input type="text" onChange={nameHandler}/ >
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={emailHandler}/ >
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default AddContact;