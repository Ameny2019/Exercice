import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Navv.css';
import cota from '../rest.jpg';
import hotel from '../hotel.jpg';
import adventure from '../adventures.jpg';
import experience from '../experience.jpg';
function Navv() {
  return (
    <>
    <CardGroup>
      {/* card  1 */}
<Card id="koko">
<Card.Img  variant="Top" id="imgd" src={hotel}/>

        <Card.Body id="textis">
          <Card.Title>Stays</Card.Title>
          <Card.Text>
            Homes, boutique hotels & more
          </Card.Text>
        </Card.Body>
        
      </Card>
      {/* card2 */}
      <Card id="koko">
      <Card.Img variant="Top"  id="imgd" src= {experience}/>
        <Card.Body id="textis">
          <Card.Title>Experiences</Card.Title>
          <Card.Text>
            Activities hosted by locals.
          </Card.Text>
        </Card.Body>
        
      </Card>
      {/* card 3  */}
      <Card id="koko">
<Card.Img   variant="Top" id="imgd" src= {adventure} />

        <Card.Body id="textis">
          <Card.Title>Adventures</Card.Title>
          <Card.Text>
           Hosted trips including lodging.
          </Card.Text>
        </Card.Body>
        
      </Card>
      {/* card 4 */}
      <Card id="koko">
<Card.Img  variant="Top" id="imgd" src={cota} />

        <Card.Body id="textis">
          <Card.Title>Restaurants</Card.Title>
          <Card.Text>
       Popular Spots to eat & drink.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  

    </>
  );
}

export default Navv;