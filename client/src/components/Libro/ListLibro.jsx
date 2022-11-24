import { useLibros } from "../../context/librosContext";
import { toast } from "react-hot-toast";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function ListLibro() {
    const { libros, deleteLibro, editoriales } = useLibros();
    const navigate = useNavigate();

    const eliminarLibro = (id) => {
        toast((t) => (
            <div>
                <Alert variant="info">
                    <span className="fw-bold">
                        ¿Esta seguro que desea eliminar?
                    </span>
                </Alert>
                <div className="d-flex justify-content-around">
                    <button
                        className="btn btn-primary"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancelar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deleteLibro(id);
                            toast.dismiss(t.id);
                            toast.success("¡Eliminado con exito!", {
                                className: "foo-bar",
                            });
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        ));
    };

    if (libros.length === 0) {
        return (
            <Container className="dashboard justify-content-md-center">
                <div
                    className="alert alert-primary mt-2 d-flex justify-content-center"
                    role="alert"
                >
                    <h1>No existen Libros en registros</h1>
                </div>
            </Container>
        );
    }
    return (
        <Container className="dashboard justify-content-md-center mb-5 card-bg">
            <Table responsive hover className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>NOMBRE</th>
                        {/* <th>EDITORIAL</th> */}
                        <th></th>
                    </tr>
                </thead>
                {libros.map((item, index) => (
                    <tbody key={index}>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nombreLibro}</td>
                            {/* <td>{item.idEditorial}</td> */}

                            {/* {editoriales
                                .filter(
                                    (editorial) =>
                                        editorial.idEditorial ==
                                        item.idEditorial
                                )
                                .map((filteredName) => (
                                    <td>{filteredName.editorial}</td>
                                ))} */}

                            <td className="d-flex justify-content-around">
                                <Button
                                    className="btn btn-warning text-white"
                                    variant="contained"
                                    color="warning"
                                    onClick={() =>
                                        navigate(`/libros/${item.idLibro}`)
                                    }
                                >
                                    <BsPencilSquare />
                                </Button>
                                <Button
                                    className="btn btn-danger text-white"
                                    variant="contained"
                                    color="error"
                                    onClick={() => eliminarLibro(item.idLibro)}
                                >
                                    <BsFillTrashFill />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
}

export default ListLibro;
