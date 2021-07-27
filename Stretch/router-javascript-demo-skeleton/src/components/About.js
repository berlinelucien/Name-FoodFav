import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// First way to write about : by desconstructing the object

const About = ({ match: { params: { name } } }) => (
    <Container>
        <h3>About is here</h3>
    </Container>
);

export default About;