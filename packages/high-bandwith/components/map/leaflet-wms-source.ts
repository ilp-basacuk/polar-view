import LeafletWms from "leaflet.wms";
import * as L from "leaflet";

// This extends the LeafletWms source onjet to tweak the functionality on click
const LeafletWmsSource = LeafletWms.Source.extend({
  'getFeatureInfo': async function(point) {
    let wmsParams;

    if (this.options.untiled) {
        // Use existing overlay
        wmsParams = this._overlay.wmsParams;
    } else {
        // Create overlay instance to leverage updateWmsParams
        const overlay = this.createOverlay(true);
        overlay.updateWmsParams(this._map);
        wmsParams = overlay.wmsParams;
    }

    const size = this._map.getSize();
    // this crs is used to show layer added to map
    const crs = this.options.crs || this._map.options.crs;
    // these are the SouthWest and NorthEast points
    // projected from LatLng into used crs
    const sw = crs.project(this._map.getBounds().getSouthWest());
    const ne = crs.project(this._map.getBounds().getNorthEast());
    const params = {
      request: 'GetFeatureInfo',
      service: 'WMS',
      // this is the code of used crs
      srs: crs.code,
      styles: wmsParams.styles,
      transparent: wmsParams.transparent,
      version: wmsParams.version,
      format: wmsParams.format,
      time: wmsParams.time,
      tiled: true,
      tileSize: wmsParams.tileSize,
      // these are bbox defined by SouthWest and NorthEast coords
      bbox: sw.x + ',' + sw.y + ',' + ne.x + ',' + ne.y,
      height: size.y,
      width: size.x,
      layers: wmsParams.layers,
      query_layers: wmsParams.layers,
      info_format: 'application/json'
    };

    params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
    params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;

    const url = this._url + L.Util.getParamString(params, this._url, true);
    this.showWaiting();
    try {
      return fetch(url).then((result) => {
        this.hideWaiting();
        if (result.status !== 200) {
          return;
        }
        return result.json();
      }).then(text => {
        if (text.features && text.features.length > 0) {
          return { features: text.features, layerCode: wmsParams.layers };
        }
        return null;
      });
    } catch (error) {
      console.error('Error', error)
    }

  },
  'identify': function(e) {
    const layers = this.getIdentifyLayers();
    if (!layers.length) {
      return;
    }
    return this.getFeatureInfo(e.containerPoint);
  }
});

export default LeafletWmsSource;
