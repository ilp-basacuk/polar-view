import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1 className="text-red-600">Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
