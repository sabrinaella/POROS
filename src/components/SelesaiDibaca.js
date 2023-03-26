import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SelesaiDibaca() {
  return (
    <div>
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="everything.jpg/100px180" />
                <Card.Body>
                    <Card.Title>Nebula</Card.Title>
                    <Card.Text>
                        Deskripsi
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  );
}

export default SelesaiDibaca;