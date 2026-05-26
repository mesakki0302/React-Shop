import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import Contact from './Components/ContactPage/Contact';
import Cart from './Components/CartPage/Cart';
import Navs from './Components/Navs';
import Login from './Components/LoginPage/Login';
import About from './Components/AboutPage/About';
import Signup from './Components/SignupPage/Signup';
import Forgot from './Components/ForgotPage/Forgot';
import Reset from './Components/ResetPasswordPage/Reset';
import PrivateRoute from './Router/PrivateRoute';
import { ErrorBoundary } from 'react-error-boundary';
import { Logouts } from './Services/product'
import { useEffect } from 'react';

function Errorcallback ({error}){
  return <h3>Something went wrong: {error.message} </h3>
}



const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await Logouts();
      } catch (error) {
        console.error("Logout failed:", error);
      }

      localStorage.removeItem("token");
      navigate("/");
    };

    logoutUser();
  }, [navigate]);

  return <h3>Logging out...</h3>;
};

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>

        {token && <Navs />}

        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Signup />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Reset' element={<Reset />} />

          {/* Protected Routes */}
             <Route path='/Home' element={
            <PrivateRoute>
              <ErrorBoundary fallback={Errorcallback}><Home /></ErrorBoundary></PrivateRoute>
          } />

          <Route path='/Contact' element={<Contact />
          } />

          <Route path='/About' element={
            <PrivateRoute><About /></PrivateRoute>
          } />

          <Route path='/logout' element = {<Logout/>}></Route>

          <Route path='/Cart' element={
            <PrivateRoute><Cart /></PrivateRoute>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
