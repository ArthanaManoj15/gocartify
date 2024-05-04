import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeCartItem,emptyCart } from '../redux/slices/cartSlice'



function Cart() {
  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);

  const getTotal = () => {
    if (cartArray.length > 0) {

      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }
  }

  useEffect(() => {
    getTotal()
  }, [cartArray])

  const handleCheckout = () => {
    alert('Order Placed Successfully')
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      {cartArray.length > 0 ?
        <div className="row my-5">
          <div className="col-md-1"></div>
          <div className="col-md-6 mt-5 mb-5" style={{ overflowX: 'auto' }}>
            <table className='table shadow w-100 mt-5'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="" width={'150px'} height={'150px'} /></td>
                    <td>${item.price}</td>
                    <td><button onClick={() => dispatch(removeCartItem(item.id))} className='btn btn-outline-danger'><FontAwesomeIcon icon={faTrash} style={{ color: "#f20202", }} /></button></td>
                  </tr>
                ))

                }
              </tbody>
            </table>
          </div>
          <div className="col-md-4 mt-5">
            <div className="shadow p-3 mt-5">
              <h3 className='text-primary text-center mb-3 '>Cart Summary</h3>
              <h5>Total Number of Products:<span className='text-primary'>{cartArray.length}</span></h5>
              <h5>Total Price:<span className='text-primary'>$ {total}</span></h5>
              <button onClick={handleCheckout} className='btn btn-success my-3 mb-3 w-100'>Checkout</button>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        :
        <div className="d-flex justify-content-center align-items-center w-100 mb-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center w-25 flex-column mt-5">
            <img src="https://statementclothing.net/images/cart.gif" alt="empty cart" style={{ height: '250px', width: '250px' }} />
            <h5 className='text-danger mt-3'>Cart's feeling pretty light, huh?</h5>
            <Link to={'/'}>
              <button className='btn btn-success mt-3 p-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</button></Link>
          </div>
          <div className="col-md-4"></div>
        </div>}
    </>
  )
}

export default Cart
