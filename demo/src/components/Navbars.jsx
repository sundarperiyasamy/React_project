import 'bootstrap/dist/css/bootstrap.min.css';
import "./tem.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from './Auth_Context'; // Import the useAuth hook

function Navbars() {
  const cartitems = useSelector(state => state.cart.cartitems);
  const { authenticated, logout } = useAuth(); // Get authentication state and logout function

  return (
    <>
      <div className='bg-img sticky-top'>
        {/* navbar section */}
        <Navbar className='py-3' expand="lg">
          <Navbar.Brand href="#home" className='head logo'>NEOGYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link as={Link} to='/' className='nav nav-items px-4'>Home</Nav.Link>
              <Nav.Link as={Link} to='/products' className='nav nav-items px-4'>Products</Nav.Link>
              {authenticated ? (
                <>
                  <Nav.Link onClick={logout} className='nav nav-items px-4'>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to='/login' className='nav nav-items px-4'>Login</Nav.Link>
              )}
              <Nav.Link as={Link} to='/cart' className='nav nav-items px-4'>Cart
                <span className='bg-black px-2 ms-2 rounded-2'>{cartitems.length}</span>
              </Nav.Link>
              <Nav.Link as={Link} to='/adminform' className='nav nav-items px-4'>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
