import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./ContactDetail.css"
const ContactDetail = ({location}) => {
    //console.log(location.state.contact);
    const{contact} = location.state
    console.log(contact);
    return ( 
        <div className="contactDetail">
            <p>name is : {contact.name} </p>
            <p>email is :{contact.email} </p>
            <Link to="/">Go to contacts list</Link>
        </div>
     );
}
 
export default ContactDetail;