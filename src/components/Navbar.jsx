import {NavLink} from "react-router-dom"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({location}) => {
    
    return ( 
    <div className="navbar">
        <h3>Contact</h3>
        <Link to="/add">
            <button>Add</button>
        </Link>
    </div> 
    );
}
 
export default Navbar;