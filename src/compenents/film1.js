import ReactPlayer from 'react-player';
import Navbar from './film';
import React from "react"
function Film1 () {
    return (
        <>
        <Navbar/>
        <div>
        <ReactPlayer url="https://www.youtube.com/embed/8YjFbMbfXaQ" width="100%"/>
        <p style={{fontSize:"20px",backgroundColor:"black", color:"white"}}>Shang-Chi va devoir affronter un passé qu’il pensait avoir laissé derrière lui lorsqu’il est pris dans la toile de la mystérieuse organisation des dix anneaux.</p>
         
         </div>
         </>
        )
}
export default Film1;