import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // create google map
        let latlng = new google.maps.LatLng(40.747198, -73.994533);
        let map = new google.maps.Map(document.getElementById('google-map'), {
            center: latlng,
            zoom: 10
        });
        this.props.events.forEach(event => {
            let latlng = new google.maps.LatLng(event.lat, event.lng);
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'Hello World!',
                visible: true
            });
        });
    }

    componentDidUpdate() {
        let latlng = new google.maps.LatLng(40.747198, -73.994533);
        let map = new google.maps.Map(document.getElementById('google-map'), {
            center: latlng,
            zoom: 10
        });
        this.props.events.forEach(event => {
            let latlng = new google.maps.LatLng(event.lat, event.lng);
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'Hello World!',
                visible: true
            });
        });
    }

    render() {
        return (
            <div className="test">
                <div id="google-map" style={{ "height": "400px" }}></div>
            </div>
        );
    }

}

export default Map;