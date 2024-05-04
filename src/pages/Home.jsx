import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import {  addWishlistItem } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/slices/cartSlice';


function Home() {
 
const dispatch=useDispatch()

  const data=useFetch('https://dummyjson.com/products')
 
  console.log(data);
  return (
    
      <Row className='ms-5 me-3' style={{ marginTop: '100px' }}>
       { data?.length>0?
       data?.map((product)=>(
       <Col className='mb-5 p-4 ' sm={12} md={6} lg={4} xl={3}>
          <Card className='w-100' style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19' }}>
            <Card.Img variant="top" src={product.thumbnail} style={{ height: '200px' }} />
            <Card.Body>
              <Card.Title className='text-center'>{product.title.slice(0,17)}</Card.Title>
              <Card.Text>
                <p>{product.description.slice(0,45)}</p>
                <p className='fw-bolder'>Price:${product.price}</p>
              </Card.Text>
              <div className='d-flex align-items-center justify-content-between'>

                <Button onClick={()=>dispatch(addWishlistItem(product))} variant="outline-danger"><FontAwesomeIcon icon={faHeart} style={{ color: "#f00505", }} /></Button>

                <Button onClick={()=>dispatch(addCartItem(product))}  variant="outline-success"><FontAwesomeIcon icon={faCartPlus} style={{ color: "#1f6402", }} /></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>))


        :
        <p>Loading....</p>}
      </Row>
    
  )
}

export default Home
