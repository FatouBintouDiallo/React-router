import './App.css';
import films from './class';
import UnFilm from './objet';
import Navbar from './compenents/film';
function Acceuil() {
  return (
    <>
    <Navbar></Navbar>
    <div>
      {films.map((film, index)=>              
      
      (<UnFilm key={index} film={film}/>)
      )}
    </div>
    </>
     );
    }
    
    export default Acceuil;