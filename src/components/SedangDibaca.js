import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SedangDibaca({data}) {
  return (
    <div>
        {data.map(value => (
            <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="everything.jpg/100px180" />
                <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                        Deskripsi
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </Container>
        ) )}
    </div>
  );
}

export default SedangDibaca;