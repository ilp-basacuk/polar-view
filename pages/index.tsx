import Head from 'next/head';

import Map from 'components/map';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <h1>Welcome to Polar View</h1>
    <div className="w-full h-screen">
      <Map projection="artic" />
    </div>
  </div>
);

export default Home;
