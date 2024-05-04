import { faArrowLeft, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removewishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Wishlist() {
  const WishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(WishlistArray);

  const dispatch=useDispatch()

  const handleAdd=(product)=>{
dispatch(addCartItem(product))
dispatch(removewishlistItem(product.id))
  }

  return (
    <>
      <Row className='ms-5 me-3 mt-5' >
        {WishlistArray.length > 0 ?
          WishlistArray.map((product) => (
            <Col className='mb-5 p-4 mt-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='w-100 shadow border-0' >
                <Card.Img variant="top" src={product.thumbnail} style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>{product.title.slice(0, 17)}</Card.Title>
                  <Card.Text>
                    <p>{product.description.slice(0, 45)}</p>
                    <p className='fw-bolder'>Price:${product.price}</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={() => dispatch(removewishlistItem(product.id))} variant="outline-danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ed0707", }} /></Button>
                    <Button onClick={()=>handleAdd(product)} variant="outline-success"><FontAwesomeIcon icon={faCartPlus} style={{ color: "#1f6402", }} /></Button>

                  </div>
                </Card.Body>
              </Card>
            </Col>))

          :

          <div className="d-flex justify-content-center align-items-center w-100 mb-5">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center align-items-center w-25 flex-column mt-5">
              <img src="https://statementclothing.net/images/cart.gif" alt="empty cart" style={{ height: '250px', width: '250px' }} />
              <h4 className='text-danger mt-3'>Hey,it feels so light!</h4>
              <Link to={'/'}>
                <button className='btn btn-success mt-3 p-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button></Link>
            </div>
            <div className="col-md-4"></div>
          </div>
        }

      </Row >
    </>

  )
}

export default Wishlist
