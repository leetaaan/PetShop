import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className='footer'>
    <div className='container'>
      <div className='row'>
        <div className='mb-4 col-lg-5 col-12'>
          <div className="logo">
            <div>
              <h1 className='text-white'>Multimart</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, officiis numquam suscipit sed autem minima et est deleniti. Itaque, nostrum.
          </p>
        </div>
        <div className='mb-4 col-lg-2 col-sm-6'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">All Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className='mb-4 col-lg-2 col-sm-6'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Usefull Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className='mb-4 col-lg-3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Contanct</h4>
            <ListGroup className='footer__contact mb-3'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>123, Sarogni Nagar, Delhi, India</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>+910123456789</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                <p>example123@gmail.com</p>
              </ListGroupItem>              
            </ListGroup>
          </div>
        </div>
        <div className='col-12'>
          <p className="footer__copyright">Copyright {year} developed by Anurag Sanadhya. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer