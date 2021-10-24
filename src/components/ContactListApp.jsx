import { useEffect, useState } from "react";
import AddContact from "./AddContactForm"
import ContactList from "./ContactList";
import Navbar from "./Navbar";

const ContactListApp = () => {
    const[contacts,setContacts]=useState([])
    const addContact =(contact)=>{      
        // const newContact = {
        //     id: Math.floor(Math.random()*1000),
        //     name:contact.name,
        //     email:contact.email,
        // }
        // setContacts([...contacts,newContact])
        setContacts([...contacts,{id:Math.floor(Math.random()*1000), ...contact}])
    }
    const deleteHandler=(id)=>{
        console.log(id);
        const filterContacts =contacts.filter((contact)=>contact.id !== id)
        setContacts(filterContacts)
    }
    useEffect(()=>{
        const savedContacts= JSON.parse(localStorage.getItem("contacts"))
        if(savedContacts) setContacts(savedContacts)
    },[])
    useEffect(()=>{
        localStorage.setItem("contacts",JSON.stringify(contacts))
    },[contacts])
    
    return ( 
        <div>
            <Navbar />
            <AddContact addContact={addContact}/>
            <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
        </div>
     );
}
 
export default ContactListApp;