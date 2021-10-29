import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./ContactDetail.css"
const ContactDetail = ({location}) => {
    //console.log(location.state.contact);
    const{contact} = location.state
    console.log(contact);
    return ( 
        <section className="contactDetail">
            <div><h3>Name: </h3><p>{contact.name}</p> </div>
            <div><h3>Email: </h3><p>{contact.email}</p> </div>
            <Link to="/" className="myLink">Go to contacts list</Link>
        </section>
     );
}
 
export default ContactDetail;