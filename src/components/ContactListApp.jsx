import { useState } from "react";
import AddContact from "./AddContactForm"

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
            <AddContact addContact={addContact}/>
        </div>
     );
}
 
export default ContactListApp;