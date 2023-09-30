import React from 'react'
import '../../styles/common-section.css'

const CommonSection = ({title}) => {
  return (
    <section className="common__section text-center">
        <div className='container-fluid text-center'>
            <h1>{title}</h1>
        </div>
    </section>
    )
};

export default CommonSection;
