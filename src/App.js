import './App.css';
import films from './class';
import UnFilm from './objet';
import Navbar from './compenents/film';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div>
      {films.map((film, index)=>              
      <div style={{margin:"4px", display:"inline-table",alignItems:"center" ,width:"19%", height:"30%", fontSize:"5px"}}>
      <UnFilm key={index} film={film}/>
      </div>
      )}
    </div>
    </>
  );
}

export default App;
