import { Link } from "react-router-dom";
import Contact from "./Contact"
import Navbar from "../components/Navbar";

const ContactList = ({contacts ,deleteHandler}) => {
    
    return ( 
        <div>
            <Navbar />
            {contacts.map((contact)=>{
                return(
                    
                        <Contact 
                            key = {contact.id}
                            contact={contact}
                            deleteHandler={()=>deleteHandler(contact.id)}
                        />
                    
                )
            })}
        </div>
     );
}
 
export default ContactList;