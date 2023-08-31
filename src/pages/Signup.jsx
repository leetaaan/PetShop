import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth } from '../firebase.config'

import { storage } from '../firebase.config'
import { db } from '../firebase.config'

import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'


const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      const storageRef = ref(storage, `image/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {


          //cap nhat profile nguoi dung
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          });
          await setDoc(doc(db, "user", user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })
        })
      })
      setLoading(false)
      toast.success('Tạo tài khoản thành công')
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error('Đã có lỗi xảy ra')
    }
  }


  return <Helmet titel="Signup">
    <section>
      <Container>
        <Row>
          {
            loading ? (<Col lg='12' className='text-center'>
              <h5 className='fw-bold'>Loading.......</h5></Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Đăng ký</h3>
                <Form className='auth_form' onSubmit={signup}>
                  <FormGroup className='form_group'>
                    <input type="text" placeholder='Nhập họ và tên của bạn'
                      value={username} onChange={(e) => setUsername(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="email" placeholder='Nhập email của bạn'
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="password" placeholder='Nhập mật khẩu của bạn'
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                  </FormGroup>

                  <button type="submit" className="login_btn auth_btn">Đăng ký tài khoản</button>
                  <p>
                    Đã có tài khoản? {' '}
                    <Link to='/login'>Đăng nhập</Link>
                  </p>
                </Form>
              </Col>
            )}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup