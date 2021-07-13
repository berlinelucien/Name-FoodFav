import React from "react";
import {Container}  from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Details = (props) => {
  const { username, email, city, phone } =
    (props.location && props.location.state) || {};
   
  return (
    <div>
      <Container>
        <NavLink
          to={{
            pathname: "/",
            state: {
              username: username,
              email: email,
              city: city,
              phone: phone,
            },
          }}
          activeClassName="active"
        >
          Go Back
        </NavLink>
        <div className="form-details">
          <div>
            <strong>Username:</strong> {username}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>City:</strong> {city}
          </div>
          <div>
            <strong>Phone:</strong> {phone}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
