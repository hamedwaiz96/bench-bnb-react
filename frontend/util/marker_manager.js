export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }
    updateMarkers(benches){
        const self = this;
        benches.map((bench) => {
           self.createMarkerFromBench(bench); 
        });
    }

    createMarkerFromBench(bench){
        const self = this;
        if (!(self.markers[bench.id])) {
            let new_marker = new google.maps.Marker({
                position: { lat: bench.lat, lng: bench.lng }
            });
            new_marker.setMap(self.map);
            self.markers[bench.id] = bench;
        }
    }
}