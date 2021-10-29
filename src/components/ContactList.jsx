import { Link } from "react-router-dom";
import Contact from "./Contact"
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import EditContactForm from "./EditContactForm";

const ContactList = ({contacts ,deleteHandler,onSearchContact}) => {
    const[edit,setEdit]=useState({id:null,name:"",email:""})
    const renderContactList=()=>{
        return(contacts.length ? 
            contacts.map((contact)=>{
                return(
                        <Contact 
                            key = {contact.id}
                            contact={contact}
                            deleteHandler={()=>deleteHandler(contact.id)}
                            onEditHandler={()=>setEdit(contact)}
                        />)
            })
            :
            <p className="emptyMessage">There is no contact...</p>    
    )
    }
    return ( 
        <div>
            
            <Navbar onSearchContact={onSearchContact}/>
            {edit.id ? <EditContactForm /> : renderContactList()}
            
        </div>
     );
}
 
export default ContactList;