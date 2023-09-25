import React, { useState } from 'react'
import '../styles/cart.css'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

import { motion } from 'framer-motion'
import { cartAcction } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount= useSelector((state) => state.cart.totalAmount)
  const userInfo = useSelector((state)=>state.userInfo)
  const [payNow, setPayNow]=useState(false)

  const handleCheckout=()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Đăng nhập để thanh toán")
    }
  }
  
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? (
                  <h2 className='fs-4 text-center'>Khong co san pham nao duoc them vao gio</h2>
                ) : (
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      { cartItems.map((item, index) => (
                          <Tr item={item} key={index} />
                        ))}             
                    </tbody>
                  </table>
                )}
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'>$ {totalAmount}</span></h6>
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
              <button onClick={handleCheckout} className="buy__btn w-100">Thanh toán</button>
              <button className="buy__btn w-100 mt-3"><Link to='/shop'>Tiếp tục mua sắm</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartAcction.deleteItem(item))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct}
        class="ri-delete-bin-line"></motion.i></td>
    </tr>
  );
};
export default Cart