import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt ,faTrashAlt,faEdit} from '@fortawesome/free-solid-svg-icons'
import style from "./Contact.css"
import { Link } from 'react-router-dom';
const Contact = ({contact,deleteHandler,onEditHandler}) => {
    const {name,id,email}= contact
    
    return ( 
        <div className="contactList">

            <FontAwesomeIcon icon={faUserAlt} className="user"/>
                <Link to={{pathname:`user/${id}` , state: {contact:contact} }} >
                        <div>
                            <h5>{name}</h5>
                            <p>{email}</p>
                        </div>
                </Link>
            <Link to={`/edit/${id}`}><FontAwesomeIcon icon={faEdit} className="edit"  onClick={onEditHandler}/></Link>
            <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={deleteHandler}/>
            
        </div>
     );
}
 
export default Contact;