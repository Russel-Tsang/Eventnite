import React, {Component} from 'react';

class SplashCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                'carousel-mic',
                'carousel-yoga',
                'carousel-food',
            ], 
            currentImage: 'carousel-mic',
            currentImageIdx: 0,
        }
    }

    componentDidMount() {
        this.clearInterval = setInterval(() => {
            let currentImageIdx = (this.state.currentImageIdx + 1) % 3;
            this.setState({ currentImageIdx });
            this.setState({ currentImage: this.state.images[currentImageIdx] });
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.clearInterval);
    }

    render() {
        return (
            <div className={`carousel ${this.state.currentImage}`} />
        );
    }
}
 
export default SplashCarousel;