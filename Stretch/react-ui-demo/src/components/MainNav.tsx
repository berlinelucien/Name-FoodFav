import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {pages} from '../App';

interface MainNavProps {
    changePage: (page: pages) => void;
}
export default class MainNav extends React.Component<MainNavProps>  {
    render(){
    return (
        <Navbar variant="dark" bg="dark" expand="lg" className="">
        <Navbar.Brand >Simpler Styling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={(e) => this.props.changePage(pages.Main)}>Home</Nav.Link>
            <Nav.Link onClick={(e) => this.props.changePage(pages.Button)}>Simple</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown" >
              <NavDropdown.Item onClick={(e) => this.props.changePage(pages.Data)}>Prime: Data Chart</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => this.props.changePage(pages.TransferList)}>MaterialUI: Transfer List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => this.props.changePage(pages.Comment)}>AntDesign: Comment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> 
    )
    }
}