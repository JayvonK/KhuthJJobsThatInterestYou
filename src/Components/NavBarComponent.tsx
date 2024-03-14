import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import discordLogo from './Pages/Assets/kisspng-discord-computer-icons-logo-simplify-5aea4b0bd3b906.5942008315253040758672.png';
import figmalogo from './Pages/Assets/logo-figma-svgrepo-com.svg';
import githublogo from './Pages/Assets/github logo.png';
import nikelogo from './Pages/Assets/nike logo.png';
import openailogo from './Pages/Assets/openai-icon-2021x2048-4rpe5x7n.png';
import home from './Pages/Assets/icons8-home-64.png';
import doc from './Pages/Assets/icons8-pdf-100.png'

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bgBlu">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto between">
          <Nav.Link as={Link} to={'/'}><img className='logos' src={home}/></Nav.Link>
            <Nav.Link as={Link} to={'/nike'} ><img className='logos' src={nikelogo}/></Nav.Link>
            <Nav.Link as={Link} to={'/openai'} ><img className='logos' src={openailogo}/></Nav.Link>
            <Nav.Link as={Link} to={'/github'} ><img className='logos' src={githublogo}/></Nav.Link>
            <Nav.Link as={Link} to={'/discord'}><img className='logos' src={discordLogo}/></Nav.Link>
            <Nav.Link as={Link} to={'/figma'} ><img className='logos' src={figmalogo}/></Nav.Link>
            <Nav.Link target='_blank' href="https://docs.google.com/document/d/1EJqk1-jQbzEvanl0Q6onav5WMElApG5XpR6KFGLFjBc/edit?usp=sharing"><img className='logos' src={doc}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;