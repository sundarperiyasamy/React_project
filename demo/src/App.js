import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/tem.css";
import Navbars from './components/Navbars';
import Products from './components/Products';
// import AddProduct from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './components/Auth_Context';
import Productslists from './components/adminpanel/Productslists';
import Orders from './components/adminpanel/Orders';
import Addproducts from './components/adminpanel/Addproducts';
import AdminLayout from './components/adminpanel/AdminLayout';
import AdminformData from './components/AdminformData';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/products' element={<Products />} />
          {/* <Route path='/add-product' element={<AddProduct />} /> */}
          {/* <Route path='/add-product/:productId' element={<AddProduct />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          
          {/* admin routes */}
           <Route path='/adminform' element={<AdminformData />}  />

          <Route path='/admin' element={<AdminLayout />} >
            <Route path='productlist' element={<Productslists />} />
            <Route path='orders' element={<Orders />} />
            <Route path='addproducts' element={<Addproducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
