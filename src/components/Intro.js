import { Col, Container, Row } from "react-bootstrap"
import CustomModal from "./CustomModal"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">MY</div>
            <div className="title">BOOK SHELF</div>
            <div>
              <CustomModal/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro