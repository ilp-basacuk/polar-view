import React from 'react';

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
          url=" https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'graticule3031_10x30',
          }}
          minZoom={0}
          tileSize={200}
          className="graticule-layer"
        />
        {/* Coastline */}
        <Layer
          url=" https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'polarview:coastS10',
          }}
          minZoom={0}
          tileSize={200}
        />
        {/* SAR subset */}
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'polarview:SARSUBSET',
          }}
          minZoom={0}
          tileSize={710}
        /> */}

        {/* Ice layers */}

        {/* Ice Chart - MetNorway */}
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'iceChartWithLandMask',
          }}
          minZoom={0}
          tileSize={256}
        /> */}
        {/* Ice Charts - NIC */}

        {/* Marginal Ice Zone (MIZ)  */}
        <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'polarview:antarctic_icechart_nic',
          }}
          minZoom={0}
          tileSize={256}
        />

        {/* <Layer
          url="https://polarcode.data.bas.ac.uk/geoserver/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220401',
            styles: '01 - Ice Concentration',
            opacity: 0.5,
          }}
          minZoom={0}
          tileSize={256}
        /> */}
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220401',
            styles: '02 - Ice Stage Of Development',
          }}
          minZoom={0}
          tileSize={256}
        /> */}

        {/* Example for WMST
        <Layer
          url="https://geos.polarview.aq/geoserver/wms?TIME=2022-03-09T00%3A00%3A00.000Z"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 's3_mosaic_s',
          }}
          minZoom={0}
          tileSize={710}
        /> */}
      </Map>
    </div>
  </div>
);

export default Home;
