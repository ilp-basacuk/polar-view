import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

const RedirectComponent: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <div className="w-full h-screen p-10">
      Go to{' '}
      <Link href="/antarctic">
        <a className="text-mainblue">Antarctic</a>
      </Link>
    </div>
  </div>
);

export default RedirectComponent;
