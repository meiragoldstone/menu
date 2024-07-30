import { Container, Button, Card, Image } from 'react-bootstrap';
import './Home.css';
const picture1 = require('../images/food1.jpg');
const picture2 = require('../images/food3.jpg');
const picture3 = require('../images/food2.jpg');
const picture4 = require('../images/Rosemary.png');
const picture5 = require('../images/food5.jpg');


export default function Home() {
    return (
     
        <Container className="home-container" >
            <div>
                <div className='image-container'>
                    <Image src={picture4} alt="Description"/>
                    </div>
                <div className="card-container">
                    <div className="btn-row">
                        <Card style={{ width: '14rem' }}>
                            <Card.Img className="card-img" variant="top" src={picture1} />
                            <Card.Body>
                                <Card.Title>Create a Menu</Card.Title>
                                <Card.Text>
                                    Create a menu for any occassion and have it safely stored here for whenever your ready for it
                                </Card.Text>
                                <Button variant="custom" className="custom-btn" href="/Add">Create</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img className="card-img" variant="top" src={picture2} />
                            <Card.Body>
                                <Card.Title>Update a Menu</Card.Title>
                                <Card.Text>
                                    Update an existing menu by switching an item with another or editing an specific item
                                </Card.Text>
                                <Button variant="custom" className="custom-btn" href="/Update">Update</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img className="card-img" variant="top" src={picture3} />
                            <Card.Body>
                                <Card.Title>Delete a Menu</Card.Title>
                                <Card.Text>
                                    When finished with your menu easily delete the used menu so you can focus on future meals
                                </Card.Text>
                                <Button variant="custom" className="custom-btn" href="/Delete">Delete</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img className="card-img" variant="top" src={picture5} />
                            <Card.Body>
                                <Card.Title>Retrieve a Menu</Card.Title>
                                <Card.Text>
                                    Retrieve a menu to review your choices, check your ingredients and start cooking
                                </Card.Text>
                                <Button variant="custom" className="custom-btn" href="/Retrieve">Retrieve</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>

            <hr className="my-4" />

        </Container>
    );
};
