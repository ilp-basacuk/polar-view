import { h } from 'preact';
import { Router, Route } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';
import Tool from '../routes/tool';

const App = () => (
	<div id="app">
		<Router>
      <Route path="/" component={Home} />
      <Route path="/tool" component={Tool} />
      <Route path="/about" component={About} />
		</Router>
	</div>
)

export default App;
