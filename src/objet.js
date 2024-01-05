import {Card} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';
function UnFilm (props) {
    return(
        <>
          <Card className="bg-dark text-white" style={{height:"200%"}}>
          <ReactPlayer url={props.film.PostURL} width="100%" height="100%"/>
          <Card.Text>
          {props.film.Description}
        </Card.Text>
        <Card.Title>{props.film.Title}</Card.Title>
      <Card.ImgOverlay>
        <Card.Text>{props.film.Rate}</Card.Text>
      </Card.ImgOverlay>
    </Card>
        </>
    )
}
export default UnFilm;
