import Contact from "./Contact"
const ContactList = ({contacts ,deleteHandler}) => {
    return ( 
        <div>
            {contacts.map((contact)=>{
                return(
                    <Contact 
                     key = {contact.id}
                     name={contact.name}
                     email={contact.email}
                     deleteHandler={()=>deleteHandler(contact.id)}
                    />
                )
            })}
        </div>
     );
}
 
export default ContactList;