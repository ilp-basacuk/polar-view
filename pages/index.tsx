import React from 'react';

import Head from 'next/head';
// import Image from 'next/image';

import MainMap from 'containers/main-map';

import Button from 'components/button';

// import logo from 'public/images/logo.png';
const renderLogo = () => (
  <a className="absolute top-4 left-4 w-12 text-white" href="/">
    Home
    {/* <Image alt="Polar view logo" src={logo} width={200} height={200} /> */}
  </a>
);

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <div className="w-full h-screen">
      {renderLogo()}
      <div className="absolute top-4 right-4 z-50">
        <Button theme="primary">Hello</Button>
      </div>
      <MainMap />
    </div>
  </div>
);

export default Home;
