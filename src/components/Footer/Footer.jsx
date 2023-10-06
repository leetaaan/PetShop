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
              <h1 className='text-white'>PetShop</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
          Caring for pets takes time, effort, and patience. However, it is a responsibility that we must take on when we get a pet. Love and care for your pet well so that they can stay healthy and happy.
          </p>
        </div>
        <div className='mb-4 col-lg-2 col-sm-6'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Danh mục</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Chó cảnh</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mèo cảnh</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Đồ cho chó</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Đồ cho mèo</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className='mb-4 col-lg-2 col-sm-6'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Mục lục</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Giỏ hàng</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Đăng nhập</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className='mb-4 col-lg-3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Liên hệ</h4>
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
          <p className="footer__copyright">Copyright {year} developed by TS & TL. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer