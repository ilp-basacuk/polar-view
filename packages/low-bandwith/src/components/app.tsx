import { h } from 'preact';
import { Router, Route } from 'preact-router';

import { QueryClient, QueryClientProvider } from 'react-query'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';
import Tool from '../routes/tool';

const queryClient = new QueryClient();

const App = () => (
	<div id="app">
		<QueryClientProvider client={queryClient}>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/tool" component={Tool} />
				<Route path="/about" component={About} />
			</Router>
		</QueryClientProvider>
	</div>
)

export default App;
