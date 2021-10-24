import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Contact = ({name,email}) => {
    return ( 
        <div >
            <FontAwesomeIcon icon={faUserAlt} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <FontAwesomeIcon icon={faTrashAlt} />
        </div>
     );
}
 
export default Contact;