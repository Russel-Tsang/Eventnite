import React, { Component } from 'react';

class Splash extends Component {
    render() {
        return (
            // image provided by unsplash
            <img className="splash-banner" src={window.splashBanner} />  
        )
    }
}

export default Splash;