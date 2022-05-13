import { Link } from 'preact-router/match';

import Menu from '../../components/menu';
import curves from '../../assets/curves.svg';

const Home = () => (
  <div className="bg-navyblue min-h-screen w-full">
		<Menu />
    <div className="h-screen w-full flex flex-col items-center justify-center z-10">
      <img className="absolute top-0 left-0 w-full overflow-hidden z-0 pointer-events-none" src={curves} />
      <a href="https://polarview.com/high/artic">
        <h2 className="text-white text-9xl uppercase tracking-widest font-extralight">Artic</h2>
      </a>
      <div className="text-mainblue uppercase my-16">
        Explore one of the poles
      </div>
      <a href="https://polarview.com/high/antarctic">
        <h2 className="text-white text-9xl uppercase tracking-widest font-extralight">Antartic</h2>
      </a>
    </div>
    <div className="absolute bottom-12 w-full flex justify-center align-center">
      <div className="text-mainblue uppercase tracking-widest text-center">
        <div>
          Have a low bandwidth connection?
        </div>
        <div>
            Go to the{' '}
            <Link href="/tool" className="text-white underline">Low bandwidth tool</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
