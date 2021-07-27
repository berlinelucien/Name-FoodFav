import './../App.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import christelle from './../images/christelle.png';
import sara from './../images/sara.jpg';
import alex from './../images/alex.jpg';
import mike from './../images/mike.png';

const About = () => (
    <Container>
      <h3>About is here</h3>
      This app is brought to you by a fabulous team of instructors!
      <br></br>
      <br></br>
  
      <Row>
        <Col>
          <Image src={christelle} className="imgStyle"></Image>
        </Col><Col>
          <Image src={sara} className="imgStyle"></Image>
        </Col>
      </Row>
  
      <Row>
        <Col>
          <Image src={alex} className="imgStyle"></Image>
        </Col><Col>
          <Image src={mike} className="imgStyle"></Image>
        </Col>
      </Row>
  
    </Container>
  )

  export default About;