// Dassi Rabenstein
// See a list of menus -> delete a menu from the list

import React, { useState , useEffect } from 'react';
import { Container, Button, Card, Row, Col} from 'react-bootstrap';
const picture = require('../images/texture.jpg');

export default function Delete() {

    // functions
    const [menuList, setMenuList] = useState([]);


    async function deleteMenu(menu) {
        try {
            const params = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(`https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/deleteMenu?menuId=${menu}`,params)
                
            if (response.ok) {
                const data = await response.json();
                console.log(data); // 'Menu deleted successfully'
                // Update state to remove the deleted menu
                setMenuList(prevMenuList => prevMenuList.filter(m => m !== menu));

                const menuElement = document.getElementById(`${menu}`);
                if (menuElement) {
                    menuElement.remove();
                }

            } else {
                console.error(`Failed to delete menu: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error deleting menu from DynamoDB', error);
        }
    }
    

    useEffect(() => {
        fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/default/getAllMenus')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then((data) => {
                //list all menu names (pks)
                const pks = data.map(d => d.pk);
                setMenuList(pks);
                console.log('Just Pks', pks);
            })
            .catch((error) => {
                console.log('There was a problem with the fetch operations: ',error)
            });
    }, []);

    return (
        <>
     
        <Container style = {{backgroundImage: `url(${picture})`, backgroundSize: 'cover', 
        backgroundPosition: 'center',backgroundRepeat: 'no-repeat', maxWidth: '80%',
        margin: '0 auto'}}>
                <Row style ={{backgroundColor: 'transparent',border: 'none'}} >
                    <Col>
                        <h1 className="text-center mt-4" style = {{color: '#025B4B'}}>Delete a menu</h1>
                    </Col>
                </Row>
                <Row>
                    <Card style ={{backgroundColor: 'transparent',border: 'none'}}>
                    <Card.Body>
                    <Row>
                        {menuList.map((menu) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={menu} className="mb-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        textAlign: 'center',
                                        backgroundColor: '#f8f9fa',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        width: '200px',
                                        height: '100px'
                                    }}
                                >
                                    <span
                                        style={{
                                            color: '#025B4B',
                                            fontWeight: 'bold',
                                            display: 'block',
                                            marginBottom: '10px',
                                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        }}
                                    >
                                        {menu}
                                    </span>
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteMenu(menu)}
                                        style={{ backgroundColor: '#025B4B', borderColor: '#025B4B', width: '100%' }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}