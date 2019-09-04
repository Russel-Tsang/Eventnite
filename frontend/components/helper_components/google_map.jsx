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
            zoom: 13
        });
    }

    componentDidUpdate() {
        let latlng = new google.maps.LatLng(40.747198, -73.994533);
        let map = new google.maps.Map(document.getElementById('google-map'), {
            center: latlng,
            zoom: 13
        });
        this.props.events.forEach(event => {
            let iconSize = [30, 30];
            let iconUrl = window.googleMapsIcon;
            if (event.venueName === this.props.hoveredLocation) {
                iconSize = [30, 50];
                iconUrl = window.googleMapsIconOrange;
            }

            let icon = {
                url: iconUrl, 
                scaledSize: new google.maps.Size(...iconSize)
            };

            let eventlatlng = new google.maps.LatLng(event.lat, event.lng);
            
            let marker = new google.maps.Marker({
                position: eventlatlng,
                map: map,
                icon: icon,
            });
        });

        
    }

    render() {
        return (
            <div id="google-map" style={{ "height": "400px" }} />
        );
    }

}

export default Map;