import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">mon projet</a>
      </div>
      <div>
        <a href="cart/">Cart</a>
        <a href="signin/">Signi In</a>
      </div>
    </header>
    <main>
    <Routes> 
    <Route path='/'element={<HomeScreen/>}></Route>
    <Route path='/product/:id'element={<ProductScreen/>}></Route>

    </Routes>
    </main>
    </div>  
    </BrowserRouter>  
  );
}

export default App;
