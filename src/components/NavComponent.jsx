import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

import NetflixLogo from "../assets/logo.png";

function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="md" className='conatiner' >
      <Container className='m-0'>
        <Navbar.Brand href="#"><img src={NetflixLogo} alt='netflix logo' style={{width: "150px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#features">Home</Nav.Link>
            <Nav.Link className="text-white" href="#tvShows" >Tv Shows</Nav.Link> 
            <Nav.Link className="text-white" href="#movies">Movies</Nav.Link>
            <Nav.Link className="text-white" href="#recently">Recently Added</Nav.Link> 
            <Nav.Link className="text-white" href="#pricing">My List</Nav.Link> 
          </Nav>
          <Nav>
            <Nav.Link href="#deets" ></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;