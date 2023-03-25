import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"

function BasicCardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.indianexpress.com/2021/05/Eid-feature-card.jpg"  width={100} height={250}/>
      <Card.Body>
        <Card.Title>Komorebi:  sunlight filtering through the leaves of trees</Card.Title>
        <Card.Text>
        ocean through leaves waves,
        nothing left then,
        Komorebi, play.
        </Card.Text>
        <Button className='v1'>Proceed</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;