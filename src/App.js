import React, { useState, Suspense } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const Cart = React.lazy(() => import('./components/Cart/Cart'));

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

  	return (
  		<Suspense fallback = {<p>Loading...</p>}>
			<CartProvider>
				{cartIsShown && <Cart onCloseCart = {hideCartHandler} />}
		  		<Header onShowCart = {showCartHandler} />
		  		<main>
		  			<Meals />
		  		</main>
			</CartProvider>
  		</Suspense>
  	);
}

export default App;
