import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Home = (props) => {

    const [state, setState] = useState({
        username: "",
        email: "",
        city: "",
        phone: "",
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.history.push({
            pathname: "/welcome",
            state,
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log("Name: " + name);
        console.log("Value: " + value);
    };

    return (
        <Container>
            <h3>Home is here</h3>
            <h6>Welcome at Fabshop!</h6>
            <div>Register now!</div>
            <br></br>
            <Form className="register-form" onSubmit={handleOnSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="city"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        name="phone"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default Home;