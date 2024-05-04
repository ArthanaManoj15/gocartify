import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const WishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(WishlistArray);

const cartArray=useSelector((state)=>state.cartReducer)
console.log(cartArray);

  return (

    <Navbar expand="lg" className="bg-primary w-100 " style={{position:'fixed',top:'0px',zIndex:'1'}}>
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='text-light'>
            <FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />
            <b>GoCartify</b></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link>
              <Link to={'/wishlist'}>
                <button className='btn btn-outline-light'><FontAwesomeIcon className='me-2' icon={faHeart} style={{ color: "#ed0707", }} />Wishlist <Badge className='ms-2' bg="light">{WishlistArray.length}</Badge></button>
              </Link>
            </Nav.Link>


            <Nav.Link>
              <Link to={'/cart'}>
                <button className='btn btn-outline-light'><FontAwesomeIcon className='me-2' icon={faCartPlus} style={{ color: "#1f6402", }} />Cart <Badge bg="light" className='ms-2'>{cartArray.length}</Badge></button>
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
