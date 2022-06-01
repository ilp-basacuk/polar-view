import LeafletWms from "leaflet.wms";

// This extends the LeafletWms source onjet to tweak the functionality on click
const LeafletWmsSource = LeafletWms.Source.extend({
  'identify': function(e) {
    var layers = this.getIdentifyLayers();
    if (!layers.length) {
        return;
    }
    this.getFeatureInfo(
      e.containerPoint, e.latlng, layers,
      (latLng, info) => console.log(latLng, info)
    );
  }
});

export default LeafletWmsSource;
