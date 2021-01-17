import makeCarousel from 'react-reveal/makeCarousel';
import './Carousel.css';
const CarouselUI = ({children})=> {
    return (
        <div className="carousel">
            {children}
        </div>
    )
}

const Carousel = makeCarousel(CarouselUI);

export default Carousel;