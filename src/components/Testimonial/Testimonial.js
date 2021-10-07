import React from 'react';
import './Testi.css';

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__header">
                <h1>Testimonial</h1>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>
            <div className="round2">
                <div className="round__image">
                    <img src={require('../images/Testimonial.png')} alt="" />
                </div>
                <div className="round">
                    {/* <h1 className='quote'>""</h1> */}
                    <h1 className='dream'>Dream house isn’t a dream anymore</h1>
                    <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                    <h1 className='name'>Gbenga Adeyinka</h1>
                    <p className='title'>Real Estate Agent</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
