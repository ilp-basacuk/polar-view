import { Link } from 'preact-router/match';

import Menu from '../../components/menu';
import Logo from '../../components/logo';
import curves from '../../assets/curves.svg';

const HIGH_BANDWITH_URL = process.env.HIGH_BANDWITH_URL;

const Home = () => (
  <div className="bg-navyblue h-screen w-full">
    <Logo />
		<Menu />
    <div className="h-screen w-full flex flex-col items-center justify-center z-10" style={{ backgroundImage: `url(${curves})` }}>
      <a href="/#">
        <h2 className="text-mainblue text-4xl lg:text-9xl uppercase tracking-widest font-extralight hover:scale-150 transition">Artic</h2>
      </a>
      <div className="text-mainblue uppercase my-16">
        Explore one of the poles
      </div>
      <a href={`${HIGH_BANDWITH_URL}/antarctic`}>
        <h2 className="text-white text-4xl lg:text-9xl uppercase tracking-widest font-extralight hover:scale-150 transition">Antartic</h2>
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
