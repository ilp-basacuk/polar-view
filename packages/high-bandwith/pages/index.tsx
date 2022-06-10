import React from 'react';

import Head from 'next/head';

const RedirectComponent: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <div className="w-full h-screen p-10">
      Go to{' '}
      <a className="text-mainblue" href="/antarctic">
        Antarctic
      </a>
    </div>
  </div>
);

export default RedirectComponent;
