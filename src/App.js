import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import Contact from './Components/ContactPage/Contact';
import Cart from './Components/CartPage/Cart';
import Navs from './Components/Navs';
import Login from './Components/LoginPage/Login';
import About from './Components/AboutPage/About';
import Signup from './Components/SignupPage/Signup';
import Forgot from './Components/ForgotPage/Forgot';
import Reset from './Components/ResetPasswordPage/Reset';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navs/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Cart' element={<Cart/>}></Route>
         <Route path='/Register' element={<Signup/>}></Route>
         <Route path='/Forgot' element={<Forgot/>}></Route>
         <Route path='/Reset' element={<Reset/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
