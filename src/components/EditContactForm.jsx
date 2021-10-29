import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../Pages/AddContactForm.css"
const EditContactForm = ({history ,match,cancelHandler , onUpdateContact ,contacts}) => {
    const[contact,setContact]=useState({name:"",email:""})
    const editId = match.params.id
    useEffect(()=>{
        const data =contacts.filter((contact)=>contact.id == editId)
        //console.log(data);
        setContact({name:data[0].name,email:data[0].email})
    },[])
    const nameChangeHandler =(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const emailChangeHandler = (e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    
    
    const updateContactHandler=(e)=>{
        e.preventDefault()
        //console.log(contact);
        onUpdateContact(editId,contact)
        history.push("/")
    }
    
    return ( 
        
        <div className="form">
            <form onSubmit={updateContactHandler}>
                <h2>Edit Contact</h2>
                <div>
                    <label >Name</label>
                    <input type="text" onChange={nameChangeHandler} placeholder="Name..." name="name" value={contact.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={emailChangeHandler} placeholder="Email..." name="email" value={contact.email} />
                </div>
                <div className="myButtons">
                    <button type="submit">update</button>
                    <Link to="/"><button className="backBtn" onClick={cancelHandler}>Cancel</button></Link>
                </div>
            </form>
        </div>
       


        
     );
}
 
export default EditContactForm;