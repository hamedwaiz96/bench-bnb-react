export default class MarkerManager {
    constructor(map, handleClick){
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
    }
    updateMarkers(benches){
        const self = this;
        let benches_obj = {};
        benches.map((bench) => {
            benches_obj[bench.id] = bench;
        });
        benches.filter((bench) => !self.markers[bench.id]).forEach((bench1) => this.createMarkerFromBench(bench1))
        Object.keys(self.markers).filter((benchId) => !benches_obj[benchId]).forEach((benchId) => self.removeMarker(self.markers[benchId]))
    }

    createMarkerFromBench(bench){
        const self = this;
        if (!(self.markers[bench.id])) {
            let new_marker = new google.maps.Marker({
                position: { lat: bench.lat, lng: bench.lng },
                map: self.map,
                benchId: bench.id
            });
            new_marker.addListener('click', () => this.handleClick(bench))
            self.markers[new_marker.benchId] = new_marker;
        }
    }

    removeMarker(marker){
        this.markers[marker.benchId].setMap(null);
        delete this.markers[marker.benchId];
    }
}