import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='row p-5 mt-md-5 bg-primary text-light'>
      <div className="col-md-4 ">
        <h5 className='mb-3 '><FontAwesomeIcon icon={faCartShopping} style={{color: "#f1f8f6",}} /> GoCartify</h5>
        <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt ex quaerat incidunt, velit adipisci labore quasi soluta earum iste qui facere. Quaerat similique doloribus ipsa error, reprehenderit incidunt eos!</p>
      </div>
      <div className="col-md-1"></div>
      {/* <FontAwesomeIcon icon={faCartShopping} style={{color: "#f5f5f5",}} /> */}
      <div className="col-md-2">
        <h5 >Links</h5>

      <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}><p>Home</p></Link>  
      <Link to={'/wishlist'} style={{textDecoration:'none' ,color:'white'}}><p>Wishlist</p></Link>    
      <Link to={'/cart'} style={{textDecoration:'none' ,color:'white'}}><p>Cart</p></Link>  

      </div>

      <div className="col-md-2">
        <h5>Guides</h5>
        <p className='mt-3'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-3">
        <h5>Contacts</h5>
        <div className='d-flex mt-3'>
          <input type="text" placeholder='Enter your Email id' className='form-control' />
          <button className='btn btn-primary ms-3 border'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faInstagram} size='2xl' />
          <FontAwesomeIcon icon={faFacebook} size='2xl' />
          <FontAwesomeIcon icon={faTwitter} size='2xl' />
          <FontAwesomeIcon icon={faLinkedin} size='2xl' />
        </div>
      </div>
    </div>
  )
}

export default Footer

