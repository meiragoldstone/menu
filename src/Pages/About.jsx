import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function About(){
 
    const picture1 = require('../images/Rosemary1.png');
    const picture2 = require('../images/Rosemary2.png');
    const picture3 = require('../images/Rosemary.png');
   

    return (
        <>

            <Carousel>
                <Carousel.Item  style = {{backgroundColor:'#025B4B' }}>
                    <Image  className="d-block rectangular-image mx-auto img-responsive img-rounded" src={picture2} alt="Image Two" fluid />
                    <Carousel.Caption  >
                        <h3>Our Goal</h3>
                        <p>Developing menus and encourage families to
                            have shared experiences around the table</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style = {{backgroundColor:'#91c331' }}>
                    <Image  className= "d-block rectangular-image mx-auto img-responsive img-rounded"src= {picture1} alt="Image One" fluid />
                    <Carousel.Caption  style = {{color: '#025B4B' }}>
                        <h3>Who We Are</h3>
                        <p>We are a menu hosting site to host all your menu lists and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style = {{backgroundColor:'#FDFDEC'  }}>
                    <Image className="d-block rectangular-image mx-auto img-responsive img-rounded" src= {picture3} alt="Image Three" fluid />
                    <Carousel.Caption style = {{color: '#025B4B' }}>
                        <h3>Get Started</h3>
                        <p> Create, delete, or edit your own menu today right here
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
        
    )
}