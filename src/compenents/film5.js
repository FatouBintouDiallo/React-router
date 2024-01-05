import ReactPlayer from "react-player";
import Navbar from './film';
import React from "react"
function Film5 () {
    return (
      <>  
       <Navbar/>
       <div>
       <ReactPlayer url="https://www.youtube.com/embed/n9xhJrPXop4" width="100%"/>
        <p style={{fontSize:"20px",backgroundColor:"black", color:"white"}}>L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur la planète la plus dangereuse de l'univers – la seule à même de fournir la ressource la plus  ...</p>
        </div>
        </>
    )
}
export default Film5;