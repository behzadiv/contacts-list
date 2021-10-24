import Contact from "./Contact"
const ContactList = ({contacts}) => {
    return ( 
        <div>
            {contacts.map((contact)=>{
                return(
                    <Contact 
                     key = {contact.id}
                     name={contact.name}
                     email={contact.email}
                    />
                )
            })}
        </div>
     );
}
 
export default ContactList;