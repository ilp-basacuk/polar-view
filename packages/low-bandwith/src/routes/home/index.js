import { Link } from 'preact-router/match';
import { useState, useMemo } from 'react';
import Menu from '../../components/menu';
import Logo from '../../components/logo';
import curves from '../../assets/curves.svg';

const HIGH_BANDWITH_URL = process.env.HIGH_BANDWITH_URL;

const Home = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const compassClass = useMemo(() => {
    if (hoveredTitle === 'arctic') return 'rotate-90';
    if (hoveredTitle === 'antarctic') return '-rotate-90';
    return 'rotate-0';
  }, [hoveredTitle]);

  return (
    <div className="bg-navyblue h-screen w-full">
      <Logo />
      <Menu />
      <div className="absolute -top-10 h-full w-full flex justify-center items-center z-10">
        <img className="absolute" src="/assets/compass.svg" />
        <img className={`absolute transform ${compassClass} transition duration-250`} src="/assets/compass-mark.svg" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-0" style={{ backgroundImage: `url(${curves})` }} />
      <div className="relative h-full w-full flex items-center justify-center z-20">
        <div className="flex flex-col -mt-20 items-center justify-center z-20">
          <a className="pb-10 cursor-not-allowed" href="/#">
            <h2 className="hover:scale-250 transition z-20" onMouseEnter={() => setHoveredTitle('artic')} onMouseLeave={() => setHoveredTitle(null)}>
              <img src="/assets/arctic.svg" />
            </h2>
          </a>
          <div className="text-mainblue uppercase my-16">
            Explore one of the poles
          </div>
          <a className="pt-10" href={`${HIGH_BANDWITH_URL}/antarctic`}>
            <h2 className="hover:scale-250 transition" onMouseEnter={() => setHoveredTitle('-rotate-90')} onMouseLeave={() => setHoveredTitle(null)}>
              <img src="/assets/antarctic.svg" />
            </h2>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center align-center">
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
}

export default Home;
