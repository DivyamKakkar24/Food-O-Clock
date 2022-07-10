import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/CartProvider';

import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<CartProvider>
			<App />
		</CartProvider>
	</BrowserRouter>, 
	document.getElementById('root')
);
