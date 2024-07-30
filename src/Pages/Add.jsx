import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import './Add.css';
const picture = require('../images/plant1.jpg');
const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [menuName, setMenuName] = useState('');
    const [menuDescription, setMenuDescription] = useState([]);
    const [userName, setUserName] = useState(''); // State for user's name
    const [error, setError] = useState(null);

    const handleNameChange = (e) => {
        setMenuName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        const lines = e.target.value.split('\n'); // Split description based on new lines without trimming
        setMenuDescription(lines);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);  // Update user's name state
    };

    const addMenu = async () => {
        if (menuName.trim() !== '' && menuDescription.length > 0 && userName.trim() !== '') {
            const newMenu = {
                menuId: menuName,
                userName: userName,
                menuItems: menuDescription // Include user's name in the newMenu object
            };
            
            try {
                const response = await fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/createMenu', {
                    method: 'POST',
                    body: JSON.stringify(newMenu),
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Menu created:', data);

                setMenus([...menus, newMenu]);
                setMenuName(''); 
                setMenuDescription([]);
                setUserName('');  // Clear user's name input after successfully adding menu
            } catch (error) {
                console.error('Error creating menu:', error);
                setError('Error creating menu');
            }
        }
    };

    return (                                                
        <Container style = {{backgroundImage: `url(${picture})`, backgroundSize: 'cover', 
        backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
            <h1 className="mt-4" style ={{color: '#025B4B'}}>Add a New Menu</h1>

            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Group style={{alignItems: 'left'}}>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    value={userName}
                    onChange={handleUserNameChange}
                    style = {{width: '50%'}}
                />
            </Form.Group>
            <Form className="mt-4">
                <Form.Group>
                    <Form.Label>Menu Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter the Name of Your Menu"
                        value={menuName}
                        onChange={handleNameChange}
                        style = {{width: '50%'}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Menu Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Enter Each Item Followed by the Enter Key"
                        value={menuDescription.join('\n')}
                        onChange={handleDescriptionChange}
                        style = {{width: '50%'}}
                    />
                </Form.Group>

                <Button variant="custom" className="btn btn-dark mt-4" onClick={addMenu}>Add Menu</Button>
            </Form>

            <ListGroup className="mt-4">
                {menus.map((menu, index) => (
                    <ListGroup.Item key={index} className="custom-list-item">
                        <h5>{menu.menuId}</h5>
                        <p>Added by: {menu.userName}</p>
                        <ul>
                            {menu.menuItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );  
};

export default MenuList;
