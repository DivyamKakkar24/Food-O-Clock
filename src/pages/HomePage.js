import React, { useState} from 'react';

import Header from '../components/Layout/Header';
import Meals from '../components/Meals/Meals';
import Cart from '../components/Cart/Cart';


const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onCloseCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default HomePage;