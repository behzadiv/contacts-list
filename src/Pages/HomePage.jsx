import { useEffect, useState } from "react";
import AddContactForm from "./AddContactForm"
import ContactList from "../components/ContactList";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import ContactDetail from "../components/ContactDetail";
import EditContactForm from "../components/EditContactForm"
import Navbar from "../components/Navbar"
const HomePage = () => {
    const[contacts,setContacts]=useState([])
    const[filteredContacts,setFilteredContacts]=useState([])
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
    const editContact =(id,editedContact)=>{
       //console.log(id,editedContact);
       const index = contacts.findIndex((contact)=>contact.id == id)
       console.log(index);
       const selectedContact = {...contacts[index]}
       //console.log(selectedContact);
       selectedContact.name = editedContact.name
       selectedContact.email = editedContact.email
       const updatedContacts = [...contacts]
       updatedContacts[index]=selectedContact
       console.log(updatedContacts); 
       setContacts(updatedContacts)
       
    }
    const searchContact=(item)=>{
        const filter =contacts.filter((contact)=>((contact.name).toLowerCase()).includes((item).toLowerCase()))
        console.log(filter);
        setFilteredContacts(filter)
    }
    
    useEffect(()=>{
        const savedContacts= JSON.parse(localStorage.getItem("contacts"))
        if(savedContacts) setContacts(savedContacts)
    },[])
    useEffect(()=>{
        setFilteredContacts([...contacts])
        localStorage.setItem("contacts",JSON.stringify(contacts))
    },[contacts])
    
    return ( 
            <section>
            <Switch>
                <Route path="/user/:id"  component={(props)=><ContactDetail {...props}/>} />
                <Route path="/edit/:id" render={(props)=><EditContactForm {...props} onUpdateContact={editContact} contacts={contacts} />} />
                <Route path="/add" render={(props)=><AddContactForm addContact={addContact} {...props}/>}  />
                <Route path="/" exact render={(props)=><ContactList contacts={filteredContacts} deleteHandler={deleteHandler}  {...props} onEditContact={editContact} onSearchContact={searchContact}/>}/>
                <Route  render={NotFound}/>
            </Switch>
            </section>
     );
}
 
export default HomePage;