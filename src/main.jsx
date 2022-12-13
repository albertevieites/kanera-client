import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import { AuthWrapper } from './context/auth.context';

import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthWrapper>
				<App />
			</AuthWrapper>
		</BrowserRouter>
	</React.StrictMode>
);
