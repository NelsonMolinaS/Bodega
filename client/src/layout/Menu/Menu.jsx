import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdExitToApp } from "react-icons/md";
import { useLogged } from "../../context/loggedContext";

import "./menu.scss";

function Menu() {
    const { logOut } = useLogged();
    return (
        <Navbar className="menu" variant="dark">
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item className="logout" text="danger">
                        <Nav.Link onClick={() => logOut()}>
                            Logout <MdExitToApp />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;
