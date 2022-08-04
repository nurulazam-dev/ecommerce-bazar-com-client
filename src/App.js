import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Product from './Components/Home/Product';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Sign_In/Login';
import Register from './Components/Sign_In/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
