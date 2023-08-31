import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

import '../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('Đăng nhập thành công')
      navigate('/checkout')

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }



  return <Helmet titel="Login">
    <section>
      <Container>
        <Row>
          {
            loading ? (
              <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading..........</h5></Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Đăng nhập</h3>
                <Form className='auth_form' onSubmit={signIn}>
                  <FormGroup className='form_group'>
                    <input type="email" placeholder='Nhập email của bạn'
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="password" placeholder='Nhập mật khẩu của bạn'
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormGroup>
                  <button type="submit" className="login_btn auth_btn">Login</button>
                  <p>
                    Không có tài khoản? {''}
                    <Link to='/signup'>Tạo tài khoản</Link>
                  </p>
                </Form>
              </Col>
            )}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login