import React from "react";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import animals from "../Images/animals.jpeg";

const Home = (props) => 
{
  const {username} =
    (props.location.state) || {};
 
  //   <div className="App">

  return (
    <div>
      <Container fluid>
        <h2>Welcome {username} To Friendly Animals</h2>

        <Card bg="info" border="primary">
          <Card.Img variant="top" src={animals} />
          <Card.Body>
            <Card.Text
            
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  textAlign:"center"
                }}
              >
                For those of you that would like to visit the Friendly Animals
                farm, now you can!
                <br />
                ​Get up close and personal with farm and exotic animals Come see
                us every Saturday and Sunday from 9 AM to 5 PM
                <br />
                We look forward to seeing you soon!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );


  };
export default Home;
