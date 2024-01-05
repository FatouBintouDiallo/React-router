import React from "react"
import { Link} from "react-router-dom"
function Navbar(){
    return (
        <>
         
        <nav>
        <div> 
        <Link to="/" className="logo"  style={{color:"white" ,textDecoration:"none" }}> ProgrammeFilm </Link> </div>
        <div className="liens"> 
            <ul>
                <li className="lien">
                    <Link to ="/"  style={{color:"white" , margin:"8px" ,textDecoration:"none"}}>Acceuil</Link>
                </li>
                <li className="lien">
                    <Link to ="/film1"  style={{color:"white" , margin:"8px" ,textDecoration:"none"}}>Film1</Link>
                </li>
                <li className="lien">
                    <Link to ="/film2"  style={{color:"white" , margin:"8px" ,textDecoration:"none"}}>Film2</Link>
                </li>
                <li className="lien">
                    <Link to ="/film3"  style={{color:"white" , margin:"8px",textDecoration:"none"}}>Film3</Link>
                </li>
                <li className="lien">
                    <Link to ="/film4" style={{color:"white" , margin:"8px" ,textDecoration:"none"}}>Film4</Link>
                </li> 
                <li className="lien">
                    <Link to ="/film5"  style={{color:"white" , margin:"8px" ,textDecoration:"none"}}>Film5</Link>
                </li>
            </ul>
            </div> 
        </nav>
        
        </>
    )
}
export default Navbar;