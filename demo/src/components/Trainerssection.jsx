import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fb from './images/facebook-logo.png';
import ins from './images/instagram-logo.png';
import tw from './images/twitter.png';
function Trainerssection() {
    return (
        <div>
            <div className='us-img training-img'>
                <Container className='pb-5'>
                    <Row>
                        <Col>
                        <div className='heading'>
                            <h2 className='text-center text-light mt-5 fw-bold fs-3 pt-5'>OUR GYM TRAINERS</h2>
                        </div>
                        </Col>
                    </Row>
                    <Row className='pt-5 fw-bold text-center pb-5 d-flex'>
                        <div className='col-md-6 col-lg-4 mx-auto'>
                            <h5 className='text-light fw-bold'>Smirth Jon</h5>
                            <div class=" jon-card mt-4 mb-5">
                            </div>
                            <div className='social-box jon-btn  mx-auto'>
                                <a href="">
                                    <img src={fb} alt="" />
                                </a>
                                <a href="">
                                    <img src={tw} alt="" />
                                </a>
                                <a href="">
                                    <img src={ins} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mx-auto'>
                            <h5 className='text-light fw-bold' >Jean Doe</h5>
                            <div class=" jon-card doe-card mt-4">
                            </div>
                            <div className='social-box mx-auto '>
                                <a href="">
                                    <img src={fb} alt="" />
                                </a>
                                <a href="">
                                    <img src={tw} alt="" />
                                </a>
                                <a href="">
                                    <img src={ins} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mx-auto'>
                            <h5 className='text-light fw-bold'>Alex Den</h5>
                            <div class=" jon-card den-card mt-4">
                            </div>
                            <div className='social-box  mx-auto'>
                                <a href="#">
                                    <img src={fb} alt="" />
                                </a>
                                <a href="#">
                                    <img src={tw} alt="" />
                                </a>
                                <a href="#">
                                    <img src={ins} alt="" />
                                </a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Trainerssection;