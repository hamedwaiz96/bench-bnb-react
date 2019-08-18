import React from 'react';
import MarkerManager from '../util/marker_manager';
import {withRouter} from 'react-router-dom';

class BenchMap extends React.Component {
    constructor(props){
        super(props);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    componentDidMount(){
        const self = this;
        const mapOptions = {
            center: { lat: 38, lng: -122 },
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
        this.MarkerManager.updateMarkers(this.props.benches);
        if(this.props.singleBench){
            this.props.fetchBench(this.props.benchId)
            this.map.setOptions({draggable: false});
        } else {
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
            google.maps.event.addListener(this.map, 'click', (e) => {
                self._handleClick(e.latLng)
            })
        }
        
        
        

    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    _handleClick(coords){
        let coordss = {
            lat: coords.lat(),
            lng: coords.lng()
        };
        this.props.history.push({
            pathname: 'benches/new',
            search: `lat=${coordss.lat}&lng=${coordss.lng}`
        });
    }

    handleMarkerClick(bench){
        this.props.history.push(`benches/${bench.id}`)
    }

    render(){
        return(
            <div id="map-container" ref={ map => this.mapNode = map }>

            </div>
        )
    }
}

export default withRouter(BenchMap);