import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ussection from './images/u-1.png';
import nutrition from './images/u-4.png';
import diet from './images/u-2.png';
import training from './images/u-3.png';

function Ussection() {
    return (
        <div>
            <div className='us-img'>
                <Container className='py-5'>
                    <Row>
                        <div className="col">
                            <h1 className='us-heading text-center py-5'>WHY CHOOSE US</h1>
                        </div>
                    </Row>
                    <div className="row ">
                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 lap-responsive  text-light text-center' >
                            <div className='box-1 '>
                                <img src={ussection} alt="" className='py-3' />
                                <h5 className='fw-bold'>QUALITY EQUIPMENT</h5>
                                <p className='sub-heading' >ipsum dolor sit amet,<br></br> consectetur adipiscing elit, <br></br>sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6  col-md-6 col-lg-3 lap-responsive text-light text-center'>
                            <img src={nutrition} alt="" className='py-3' />
                            <h5 className='fw-bold'>NUTRITION</h5>
                            <p className='sub-heading' >ipsum dolor sit amet,<br></br> consectetur adipiscing elit, <br></br>sed do eiusmod tempor</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 lap-responsive text-light text-center'>
                            <img src={diet} alt="" className='py-3' />
                            <h5 className='fw-bold'>HEALTHY DIET PLAN</h5>
                            <p className='sub-heading' >ipsum dolor sit amet,<br></br> consectetur adipiscing elit, <br></br>sed do eiusmod tempor</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 lap-responsive text-light text-center'>
                            <img src={training} alt="" className='py-3' />
                            <h5 className='fw-bold'>SPORT TRAINING</h5>
                            <p className='sub-heading' >ipsum dolor sit amet,<br></br> consectetur adipiscing elit, <br></br>sed do eiusmod tempor</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )

}
export default Ussection;