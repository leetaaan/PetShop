import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';


const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
        <section>
          <Container>
            <Row>
              <Col lg='8'>
                <h6 className='mb-4 fw-bold'>Thông tin hóa đơn</h6>
                <Form className='billing_group'>
                  <FormGroup className="form_group">
                    <input type="text" placeholder='Nhập họ tên của bạn' />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="email" placeholder='Nhập email của bạn' />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="number" placeholder='Nhập số điện thoại của bạn' />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input type="text" placeholder='Nhập địa chỉ cụ thể của bạn' />
                  </FormGroup>
                </Form>
              </Col>
              <Col lg='4'>
                <div className="checkout_cart">
                  <h6>
                    Số luong: <span>{totalQty} items</span>
                    </h6>
                  <h6>
                    Subtotal: <span>{totalAmount} VND</span>
                    </h6>
                  <h6>
                    <span>
                      Shipping:<br />free shipping
                      </span>
                      <span>0</span>
                    </h6>
                  <h4>Tong tiền <span>{totalAmount} VND</span></h4>
                  <button className="buy_btn auth__btn w-100 ">Place an order</button>
                  {
                    <div className='paybycard'>
                      <StripeCheckout  stripeKey="pk_test_51NrfpxDk4qSKHcNdRZWzyjca6e70DLZBPSHmwpFmZoTYtc2dNgKSvEsSD3h9ydFdm69xHyf85ycYEcTTTEe7e7si00g7FOx9Mg"/>
                    </div>
                  }
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Checkout