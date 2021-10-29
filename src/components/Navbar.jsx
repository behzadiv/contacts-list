import {NavLink} from "react-router-dom"
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = ({onSearchContact}) => {
    const[item,setItem]=useState("")
    const searchHandler=(e)=>{
        setItem(e.target.value)
        
    }
    useEffect(()=>{
        onSearchContact(item)
        //console.log(item);
    },[item])
    return ( 
    <div className="navbar">
        <h3>Contact</h3>
        <div className="searchContainer">
            <input type="text" placeholder="Search..." onChange={searchHandler}/>
            <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
        </div>
        <Link to="/add">
            <button>Add</button>
        </Link>
    </div> 
    );
}
 
export default Navbar;