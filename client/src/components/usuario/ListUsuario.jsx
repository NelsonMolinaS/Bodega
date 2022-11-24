import { useUsuarios } from "../../context/usuarioContext";
import { toast } from "react-hot-toast";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function ListUsuario() {
    const { usuarios, deleteUsuario } = useUsuarios();

    const navigate = useNavigate();

    const eliminarUsuario = (id) => {
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
                            deleteUsuario(id);
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

    if (usuarios.length === 0) {
        return (
            <Container className="dashboard justify-content-md-center">
                <div
                    className="alert alert-primary mt-2 d-flex justify-content-center"
                    role="alert"
                >
                    <h1>No existen empleados en registros</h1>
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
                        <th>RUT</th>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th></th>
                    </tr>
                </thead>
                {usuarios.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.rut}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td className="d-flex justify-content-around">
                                <Button
                                    className="btn btn-warning text-white"
                                    variant="contained"
                                    color="warning"
                                    onClick={() =>
                                        navigate(
                                            `/employees/${item.idEmpleado}`
                                        )
                                    }
                                >
                                    <BsPencilSquare />
                                </Button>
                                <Button
                                    className="btn btn-danger text-white"
                                    variant="contained"
                                    color="error"
                                    onClick={() =>
                                        eliminarUsuario(item.idEmpleado)
                                    }
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

export default ListUsuario;
