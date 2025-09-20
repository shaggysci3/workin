import { Link } from "react-router-dom"
import './Navbar.css'

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";


const Navbar=()=>{
    const[selected,setSelected]=useState("")

    
    
    function handleClick(e) {
        const id = e.target.id;
        setSelected(prevSelected => (prevSelected === id ? "" : id));
    }

    return(
    <>
    <div className="Navbar">
        <div className="NavbarTitle">Workout Plan</div>
        <div id="fund" onClick={handleClick} className="NavbarItem">Funds</div>
        <Link id="invest" onClick={handleClick} className="NavbarItem">Investment</Link>
        <Link id="insights" onClick={handleClick} className="NavbarItem">Insights</Link>

        <div className={selected==="fund"?"fundLink":"hide"}>
                
                <Link className="dropItem">mutual</Link>
                <Link className="dropItem">hedge</Link>
                <Link className="dropItem">closed end funds</Link>
                
        </div>
        <div className={selected==="invest"?"investLink":"hide"}>
                
                <Link className="dropItem">mutual</Link>
                <Link className="dropItem">hedge</Link>
                <Link className="dropItem">closed end funds</Link>
                
        </div>
    </div>
    <div style={{padding:"50px"}}></div>

    </>
    )
}
export default Navbar