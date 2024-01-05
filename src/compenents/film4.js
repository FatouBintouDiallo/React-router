import ReactPlayer from "react-player"
import Navbar from './film';
import React from "react"
function Film4 () {
    return (
      <>
      
       <Navbar/>
       <div style={{}}>
       <ReactPlayer url="https://www.youtube.com/embed/Xlia49w_MHA" width="100%"/>
        <p style={{fontSize:"20px",backgroundColor:"black", color:"white"}}>Un acteur en galère accepte pour boucler ses fins de mois d’animer un atelier théâtre en prison. Surpris par les talents de comédien des détenus, il se met en tête de monter avec eux une pièce sur la scène d’un vrai théâtre. Commence alors une formidable aventure humaine. Inspiré d’une histoire vraie.</p>
       
        </div>
        </>
    )
}
export default Film4;