import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
      <Link className="brand" to="/">
            MON PROJET
            </Link>  
      </div>
      <div>
      <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
        {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}      </div>
    </header>
    <main>
    <Routes> 
    <Route path="/cart/:id" element={<CartScreen/>} />
    <Route path='/'element={<HomeScreen/>}></Route>
    <Route path='/product/:id'element={<ProductScreen/>}></Route>
    <Route path='/signin'element={<SigninScreen/>}></Route>
    <Route path='/register'element={<RegisterScreen/>}></Route>
    </Routes>
    </main>
    </div>  
    </BrowserRouter>  
  );
}

export default App;
