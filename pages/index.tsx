import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import MainMap from 'containers/main-map';
import Menu from 'containers/menu';

import logo from 'public/images/logo.png';

const renderLogo = () => (
  <a className="absolute top-6 left-6 z-50 text-white" href="/" title="polar view logo">
    <Image alt="Polar view logo" src={logo} width="144px" height="24px" />
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
        <Menu />
      </div>
      <MainMap />
    </div>
  </div>
);

export default Home;
