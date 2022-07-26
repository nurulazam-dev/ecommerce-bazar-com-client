import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound/NotFound';
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
        <Route path='/register' element={<Register />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
