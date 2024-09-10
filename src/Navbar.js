import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toggle  from "./Toggle";
export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">AI-Platforms</Navbar.Brand>
          <Nav className="">
            <Toggle></Toggle>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
