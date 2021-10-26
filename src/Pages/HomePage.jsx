import { useEffect, useState } from "react";
import AddContactForm from "./AddContactForm"
import ContactList from "../components/ContactList";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import ContactDetail from "../components/ContactDetail";

const HomePage = () => {
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
            <section>
            
            <Switch>
                <Route path="/user/:id"  component={(props)=><ContactDetail {...props}/>} />
                <Route path="/add" render={(props)=><AddContactForm addContact={addContact} {...props}/>} />
                <Route path="/" exact render={()=><ContactList contacts={contacts} deleteHandler={deleteHandler}/>}/>
                <Route  render={NotFound}/>
            </Switch>
            </section>
            // {/* <AddContact addContact={addContact}/> */}
            // {/* <ContactList contacts={contacts} deleteHandler={deleteHandler}/> */}
        
     );
}
 
export default HomePage;