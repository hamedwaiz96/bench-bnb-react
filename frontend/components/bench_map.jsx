import React from 'react';
import MarkerManager from '../util/marker_manager';
import {withRouter} from 'react-router-dom';

class BenchMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const self = this;
        const mapOptions = {
            center: { lat: 38, lng: -122 },
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        google.maps.event.addListener(this.map, 'idle', () => {
            let new_bounds = self.map.getBounds().toJSON();
            const north = new_bounds.north;
            const south = new_bounds.south;
            const east = new_bounds.east;
            const west = new_bounds.west;
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            }
            self.props.updateBounds('bounds', bounds);
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return(
            <div id="map-container" ref={ map => this.mapNode = map }>

            </div>
        )
    }
}

export default withRouter(BenchMap);