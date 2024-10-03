import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Row';
import './tem.css';

const Infosection = () => {
    return (
        <div>
            <section className='info-section py-5'>
                <Container>
                    <Row >
                        <div  className='info-item mx-auto d-flex justify-content-between'>
                            <a  href="" className='text-decoration-none float-start'>
                                <div className='item'>
                                    <div className='img-box box-1'>
                                    </div>
                                    <div className='detail-box'>
                                        <p>location</p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className='text-decoration-none float-start'>
                                <div className='item'>
                                    <div className='img-box box-2'>
                                    </div>
                                    <div className='detail-box'>
                                        <p>
                                            +02 1234567890
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className='text-decoration-none'>
                                <div className='item'>
                                    <div className='img-box box-3'>
                                    </div>
                                    <div className='detail-box'>
                                        <p>
                                            demo@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Infosection