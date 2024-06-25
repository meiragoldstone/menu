import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function About() {
    const picture1 = require('../images/Orange.jpg');
    const picture2 = require('../images/Watermelon.jpg');
    const picture3 = require('../images/Avocado.jpg');

    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <Image  className="d-block w-100 carousel-image" src= {picture1} alt="Image One" fluid />
                    <Carousel.Caption>
                        <h3>Who We Are</h3>
                        <p>We are a menu hosting site to host all your menu lists and more</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <Image  className="d-block w-100 carousel-image" src={picture2} alt="Image Two" fluid />
                    <Carousel.Caption>
                        <h3>Our Goal</h3>
                        <p>To develop menus and encourage families to have shared experiences around the table</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100 carousel-image" src= {picture3} alt="Image Three" fluid />
                    <Carousel.Caption>
                        <h3>Get Started</h3>
                        <p> Create, delete, or edit your own menu today
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}
