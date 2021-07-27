import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import Item from './components/Item.js';

const App = () => (
  <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">FabShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="justify-content-center" fill variant="pills">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>.
        </Container>
      </Navbar>

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Shop} exact path="/shop" />
        <Route component={Item} path="/shop/:id" />
        <Route component={About} path="/about" />
        <Route component={Welcome} path="/welcome" />
      </Switch>
  </Router >
);

export default App;

