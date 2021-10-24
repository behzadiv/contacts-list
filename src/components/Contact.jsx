import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import style from "./Contact.css"
const Contact = ({name,email,deleteHandler}) => {

    
    return ( 
        <div className="contactList">
            <FontAwesomeIcon icon={faUserAlt} className="user"/>
            <div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
            <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={deleteHandler}/>
        </div>
     );
}
 
export default Contact;