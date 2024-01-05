import Navbar from "./film2"
import React from "react"
import ReactPlayer from "react-player";
function Film2 () {
    return (
        <>
        <Navbar/>
        <div>
        <ReactPlayer url="https://www.youtube.com/embed/ry19UYQoAro" width="100%"/>
        <p style={{fontSize:"20px",backgroundColor:"black", color:"white"}}>Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l’univers tout entier. Lorsqu’il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre aliens disparates</p>

        </div>
        </>
    )
}
export default Film2;