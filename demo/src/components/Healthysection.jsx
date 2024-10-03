import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Healthysection() {
    return (
        <div>
            <div className='us-img healthy-img'>
                <Container>
                    <Row>
                        <Col className='mx-auto text-center '>
                            <h2 className=' text-light fw-bold mt-5 pt-5 mb-5'>HEALTHY MIND, HEALTHY BODY</h2>
                            <div className='h-para'>
                            <p className=' text-light  pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                            </div>
                            <div className=' pb-5'>
                            <button className='button mb-5'>read more</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default Healthysection