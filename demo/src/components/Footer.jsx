import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer(){
    return(
        <div>
         <Container>
            <Row>
                <Col>
                <p className='text-center py-2 mt-3'>© 2020 All Rights Reserved. Design by Free Html Templates</p>
                </Col>
            </Row>
         </Container>
        </div>
    )
}
export default Footer