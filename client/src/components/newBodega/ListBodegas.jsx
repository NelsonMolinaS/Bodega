import { useBodegas } from "../../context/bodegaContext";
import { toast } from "react-hot-toast";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function ListBodegas() {
    const { bodegas, deleteBodega } = useBodegas();

    const navigate = useNavigate();

    const eliminarBodega = (id) => {
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
                            deleteBodega(id);
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

    if (bodegas.length === 0) {
        return (
            <Container className="dashboard justify-content-md-center">
                <div
                    className="alert alert-primary mt-2 d-flex justify-content-center"
                    role="alert"
                >
                    <h1>No existen bodegas en registros</h1>
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
                        <th>CÓDIGO BODEGA</th>
                        <th>NOMBRE</th>
                        <th></th>
                    </tr>
                </thead>
                {bodegas.map((item, index) => (
                    <tbody key={index}>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.codBodega}</td>
                            <td>{item.nombreBodega}</td>
                            <td className="d-flex justify-content-around">
                                <Button
                                    className="btn btn-warning text-white"
                                    variant="contained"
                                    color="warning"
                                    onClick={() =>
                                        navigate(`/bodegas/${item.idBodega}`)
                                    }
                                >
                                    <BsPencilSquare />
                                </Button>
                                <Button
                                    className="btn btn-danger text-white"
                                    variant="contained"
                                    color="error"
                                    onClick={() =>
                                        eliminarBodega(item.idBodega)
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

export default ListBodegas;
