import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	AuthorizationProvider,
	useAuthorization,
} from './context/authorizationContext';
import { Routes } from './routes/Routes';

function App() {
	const authorization = useAuthorization();

	return (
		<AuthorizationProvider value={authorization}>
			<Router>
				<Routes />
			</Router>
		</AuthorizationProvider>
	);
}

export default App;

// https://saurabhshah23.medium.com/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22
