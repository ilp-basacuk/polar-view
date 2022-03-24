import Head from 'next/head';

import Layer from 'components/layer';
import Map from 'components/map';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <h1>Welcome to Polar View</h1>
    <div className="w-full h-screen">
      <Map projection="antarctic">
        <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'polarview:SARSUBSET',
          }}
          minZoom={0}
          tileSize={710}
        />
      </Map>
    </div>
  </div>
);

export default Home;
