import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <div class="grid-container">
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
    <div>
      <div className="row center">
      {
        data.products.map(product => (
        <Product product={product}/> 
        ))
      }
        </div>
        </div>
        </main>

        </div>  
       
  );
}

export default App;
