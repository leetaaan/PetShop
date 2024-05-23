import React from 'react'
import './services.css';
// import { Container, Row, Col } from 'reactstrap';
import { motion } from "framer-motion"
import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
    <section className='services'>
        <div className='container'>
            <div className='row'>
                {
                    serviceData.map((item, index) => 
                    (
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-3' key={index}>
                            <motion.div 
                                whileHover={{scale: 1.1}} className="services__item" style={{background: `${item.bg}`}}>
                                <span><i class={item.icon}></i></span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default Services
