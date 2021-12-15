import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel'

const loadImage = (imageName) => (require(`../../helpers/img/${imageName}`).default);

export default function CarouselSlider() {
    return (
        <Container>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={loadImage("logo2.png")}
                    alt="Banner logo"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={loadImage("slider.png")}
                    alt="Banner estilo"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
