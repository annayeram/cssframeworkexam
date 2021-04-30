import "./App.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

function App() {
  return (
    <div className="App">
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="#a">
          Settings
        </a>
      </Menu>
      <Container className="main-container">
        <Row className="justify-content-md-center align-items-md-center">
          <Col md="8">
            <h1 className="title">Jelentkezés</h1>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  size="lg"
                  name="name"
                  id="name"
                  placeholder="Név"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  size="lg"
                  name="email"
                  id="email"
                  placeholder="E-mail cím"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  size="lg"
                  name="phone"
                  id="phone"
                  placeholder="Telefonszám"
                />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" id="accepted">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>
                    Elolvastam és elfogadom az{" "}
                    <a href="myweb.com">Adatkezelési Tájékoztatót.</a>
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">
                ELKÜLD
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
