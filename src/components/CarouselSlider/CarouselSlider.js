import Carousel from 'react-bootstrap/Carousel'

export default function CarouselSlider() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3500}>
                    <img
                    className="d-block w-100"
                    src={"https://firebasestorage.googleapis.com/v0/b/ecommerce-garcia.appspot.com/o/Carousel%2Fslider.png?alt=media&token=6b3eb9f7-3aa7-4652-9ab6-a45c33f9151d"}
                    alt="Banner estilo"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={"https://firebasestorage.googleapis.com/v0/b/ecommerce-garcia.appspot.com/o/Carousel%2Flogo2.png?alt=media&token=15eb3992-9e06-43be-969e-df60ffa46133"}
                    alt="Banner logo"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
