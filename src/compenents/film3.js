import ReactPlayer from 'react-player';
import Navbar from './film';
import React from "react"
function Film3 () {
    return (
      <>
       <Navbar/>
      <div>
      <ReactPlayer url="https://www.youtube.com/embed/eOrNdBpGMv8" width="100%"/>
      <p style={{fontSize:"20px",backgroundColor:"black", color:"white"}}>Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes</p>
     
      </div>
      </>
    )
}
export default Film3;