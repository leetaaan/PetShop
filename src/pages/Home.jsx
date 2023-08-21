import React,{useEffect,useState} from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import "../styles/home.css"

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'

const Home = () => {
  const year = new Date().getFullYear()
  return <Helmet title = {"Home"}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg = '6' md = '6'>
            <div className="hero__content">
                <p className="hero_subtitile">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                   elit. Libero veritatis nostrum illum tempore ad animi error
                  laboriosam praesentium repellat debitis.</p>

                  <motion.button whileTap={{ scale:1.2 }} className="buy__btn">
                    <Link to = '/shop'>SHOP NOW</Link>
                  </motion.button>
            </div>
          </Col>

          <Col lg = '6' md = '6'>
            <div className="hero__img">
              <img src = {heroImg} alt = ""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg = '12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home