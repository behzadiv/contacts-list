import { useEffect, useState } from "react";
import AddContact from "./AddContactForm"
import ContactList from "./ContactList";
import Navbar from "./Navbar";

const ContactListApp = () => {
    
    const[contacts,setContacts]=useState([])
    const addContact =(contact)=>{      
        const newContact = {
            id: Math.floor(Math.random()*1000),
            name:contact.name,
            email:contact.email,
        }
        setContacts([...contacts,newContact])
    }
    const deleteHandler=(id)=>{
        console.log(id);
        const filterContacts =contacts.filter((contact)=>contact.id !== id)
        setContacts(filterContacts)
    }
    return ( 
        <div>
            <Navbar />
            <AddContact addContact={addContact}/>
            <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
        </div>
     );
}
 
export default ContactListApp;