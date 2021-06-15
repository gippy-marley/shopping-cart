import { useState } from 'react';
import './App.css';
import Bag from './components/Bag';
import Banner from './components/Banner';
import Header from './components/Header';
import Main from './components/Main';
import Order from './components/Order';
import data from './data.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orderpage from './components/Orderpage';
import About from './components/About';

function App() {
const {products}=data;
const [cartItems, setCartItems] = useState([]);  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(cartItems.length===1 && exist.qty === 1 ){
      alert('please add some items')      
      setCartItems(cartItems.filter((x) => x.id !== product.id));

    } if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));

    }
 
    else {
      
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = 0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <Router>
    <div>
     <Header></Header>
     <Switch>

     <Route exact path='/about'>
     <About></About>
     </Route>
     <Route exact path='/'>
     <Banner></Banner>
     
      <div className="row">
        
        <Main onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} products={products} ></Main>
             
        <Bag
        onAdd={onAdd} onRemove={onRemove}
        totalPrice={totalPrice}
        shippingPrice={shippingPrice}
        taxPrice={taxPrice}
        itemsPrice={itemsPrice} 
        cartItems={cartItems}></Bag>
        
      </div>
      
      <Order totalPrice={totalPrice}
      cartItems={cartItems}></Order>
      </Route>

      <Route exact path='/ordersuccess'>
      <Orderpage></Orderpage>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
