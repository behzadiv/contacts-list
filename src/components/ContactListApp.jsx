import { useState } from "react";
import AddContact from "./AddContactForm"
import ContactList from "./ContactList";
import Navbar from "./Navbar";

const ContactListApp = () => {
    const[contacts,setContacts]=useState([])
    const addContact =(userName,userEmail)=>{      
        const newContact = {
            id: Math.floor(Math.random()*1000),
            name:userName,
            email:userEmail,
        }
        setContacts([...contacts,newContact])
    }
    
    return ( 
        <div>
            <Navbar />
            <AddContact addContact={addContact}/>
            <ContactList contacts={contacts}/>
        </div>
     );
}
 
export default ContactListApp;