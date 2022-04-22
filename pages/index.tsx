import Layer from 'components/layer';
import Map from 'components/map';
import Head from 'next/head';
import React from 'react';

// https://geos.polarview.aq/geoserver/gwc/service/wms?&service=WMS&request=GetMap&layers=gwcPolarviewCoastS10Grat&styles=&format=image%2Fpng&transparent=true&version=1.1.1&width=710&height=710&srs=EPSG%3A3031&bbox=-4194304.0000
// https://geos.polarview.aq/geoserver/gwc/service/wms?LAYERS=gwcPolarviewCoastS10Grat&FORMAT=image%2Fpng&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3031&BBOX=-519991.03998208,1720013.4400269,1720013.4400269,3960017.9200358&WIDTH=200&HEIGHT=200
const Home: React.FC = () => (
  <div>
    <Head>
      <title>Polar View</title>
    </Head>
    <h1>Welcome to Polar View</h1>
    <div className="w-full h-screen">
      {/** @ts-ignore */}
      <Map projection="antarctic">
        {/* // basemap and graticule: src="https://geos.polarview.aq/geoserver/gwc/service/wms?LAYERS=gwcPolarviewCoastS10Grat&FORMAT=image%2Fpng&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3031&BBOX=-519991.03998208,1720013.4400269,1720013.4400269,3960017.9200358&WIDTH=200&HEIGHT=200" */}
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/gwc/service/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'gwcPolarviewCoastS10Grat',
            style: '',
          }}
          minZoom={0}
          tileSize={200}
        /> */}
        {/* sarsubset */}
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
        {/* sarsubset */}
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
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'antarctic_icechart_nic',
          }}
          minZoom={0}
          tileSize={256}
        /> */}
        <Layer
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
        />
        {/* src="https://polarcode.data.bas.ac.uk/geoserver/wms?LAYERS=nrt_antarc220401&STYLES=02%20-%20Ice%20Stage%20Of%20Development&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&SRS=EPSG%3A3031&BBOX=-2132794.2655885,734411.46882294,734411.46882294,3601617.2032344&WIDTH=256&HEIGHT=256" */}
        <Layer
          url="https://polarcode.data.bas.ac.uk/geoserver/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220401',
            styles: '02 - Ice Stage Of Development',
            opacity: 0.5,
          }}
          minZoom={0}
          tileSize={256}
        />
        <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220303',
            styles: '01 - Ice Concentration',
          }}
          minZoom={0}
          tileSize={256}
        />
        <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220303',
            styles: '02 - Ice Stage Of Development',
          }}
          minZoom={0}
          tileSize={256}
        />
        {/* src="https://polarcode.data.bas.ac.uk/geoserver/wms?LAYERS=nrt_antarc220401&STYLES=01%20-%20Ice%20Concentration&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&SRS=EPSG%3A3031&BBOX=-2132794.2655885,734411.46882294,734411.46882294,3601617.2032344&WIDTH=256&HEIGHT=256" */}
        {/* https://geos.polarview.aq/geoserver/polarview/wms?&service=WMS&request=GetMap&layers=nrt_antarc220303&styles=02%20-%20Ice%20Stage%20Of%20Development&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG%3A3031&bbox=2097152.0000000047,-2097152.0000007804,4194304.000001561,1.284135242062738e-10 */}
        {/* 'https://geos.polarview.aq/geoserver/wms?LAYERS=polarview%3Aantarctic_icechart_nic&TRANSPARENT=TRUE&STYLES=SeaIceChartNIC&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3031 */}
        {/* https://polarcode.data.bas.ac.uk/geoserver/wms?LAYERS=nrt_antarc220303&STYLES=01%20-%20Ice%20Concentration&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG%3A3031 */}
        {/* https://polarcode.data.bas.ac.uk/geoserver/wms?LAYERS=nrt_antarc220303&STYLES=02%20-%20Ice%20Stage%20Of%20Development&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG */}
        {/* <Layer
          url="https://geos.polarview.aq/geoserver/polarview/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'polarview:antarctic_icechart_ni',
            styles: 'SeaIceChartNIC',
          }}
          minZoom={0}
          tileSize={256}
        /> */}

        {/* <Layer
          url="https://polarcode.data.bas.ac.uk/geoserver/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220303',
            styles: '01 - Ice Concentration',
          }}
          tileSize={256}
        /> */}
        {/* <Layer
          url="https://polarcode.data.bas.ac.uk/geoserver/wms?"
          params={{
            format: 'image/png',
            version: '1.1.1',
            transparent: true,
            layers: 'nrt_antarc220303',
            styles: '02 - Ice Stage',
          }}
          minZoom={0}
          tileSize={710}
        />
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
