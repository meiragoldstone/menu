import Nav from 'react-bootstrap/Nav';
//import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SiteHeader() {
  return (
   <>
        <Nav 
        style={{backgroundColor: '#025B4B', fontSize: 25, fontFamily:'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
        justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="text-white-50">
                <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="About" style={{color:"white"}}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Contact" style={{color:"white"}}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Add" style={{color:"white"}}>Add</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Delete" style={{color:"white"}}>Delete</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Retrieve" style={{color:"white"}}>Retrieve</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Update"style={{color:"white"}} >Update</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
  );
}
