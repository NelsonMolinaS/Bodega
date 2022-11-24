import React from "react";
import { useIni } from "../context/inicioContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";

function Inicio() {
    const { usuarios, editoriales, bodegas, libros } = useIni();

    const libro = libros.length;
    const usuario = usuarios.length;
    const editorial = editoriales.length;
    const bodega = bodegas.length;
    return (
        <Container className="dashboard mb-5">
            <Row
                col={12}
                className="d-flex justify-content-around mb-5 bg-card"
            >
                <Card
                    bg="primary"
                    border="primary"
                    text="white"
                    style={{ width: "20rem" }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>
                            <h3>Bodega</h3>
                        </Card.Title>
                        <Card.Text>
                            Cantidad de bodegas en sistema {bodega}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            exact="true"
                            to="/bodegas"
                        >
                            <Button className="btn btn-warning btn-block text-black">
                                Gestión Bodegas
                                <BsChevronDoubleRight />
                            </Button>
                        </Link>
                    </Card.Footer>
                </Card>
                <Card
                    bg="danger"
                    border="danger"
                    text="white"
                    style={{ width: "20rem" }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>
                            <h3>Libros</h3>
                        </Card.Title>
                        <Card.Text>
                            Cantidad de libros en sistema {libro}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            exact="true"
                            to="/libros"
                        >
                            <Button className="btn btn-success btn-block text-white">
                                Gestión de libros
                                <BsChevronDoubleRight />
                            </Button>
                        </Link>
                    </Card.Footer>
                </Card>
                <Card
                    bg="warning"
                    border="warning"
                    text="white"
                    style={{ width: "20rem" }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>
                            <h3>Editoriales</h3>
                        </Card.Title>
                        <Card.Text>
                            Usuarios Cantidad de editoriales en sistema{" "}
                            {editorial}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            exact="true"
                            to="/editoriales"
                        >
                            <Button className="btn btn-primary btn-block text-white">
                                Gestión de editoriales
                                <BsChevronDoubleRight />
                            </Button>
                        </Link>
                    </Card.Footer>
                </Card>
                <Card
                    bg="success"
                    border="success"
                    text="white"
                    style={{ width: "20rem" }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>
                            <h3>Usuarios</h3>
                        </Card.Title>
                        <Card.Text>
                            Cantidad de usuarios en sistema {usuario}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            exact="true"
                            to="/employees"
                        >
                            <Button className="btn btn-danger btn-block text-white">
                                Gestión de usuarios
                                <BsChevronDoubleRight />
                            </Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Row>
            <Row col={12} className="d-flex justify-content-around">
                <ListGroup className="mb-5" style={{ width: "20rem" }}>
                    {bodegas.map((item) => (
                        <ListGroup.Item key={item.idBodega} variant="primary">
                            {item.codBodega} {item.nombreBodega}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <ListGroup className="mb-5" style={{ width: "20rem" }}>
                    {libros.map((item) => (
                        <ListGroup.Item key={item.idLibro} variant="danger">
                            {item.nombreLibro}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <ListGroup className="mb-5" style={{ width: "20rem" }}>
                    {editoriales.map((item) => (
                        <ListGroup.Item
                            key={item.idEditorial}
                            variant="warning"
                        >
                            {item.editorial}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <ListGroup className="mb-5" style={{ width: "20rem" }}>
                    {usuarios.map((item) => (
                        <ListGroup.Item key={item.idEmpleado} variant="success">
                            {item.nombre} {item.apellido}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Inicio;
