import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useEditorial } from "../../context/editorialContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";

function FormEditorial() {
    const { createEditorial, getEditorial, updateEditorial } = useEditorial();
    const navigate = useNavigate();
    const [iniValues, setIniValues] = useState({
        nombre: "",
        autor: "",
        editorial: "",
    });
    const [titulo, setTitulo] = useState("Nueva editorial");
    const [btnAtualizar, setBtnAtualizar] = useState();
    const [btnNuevo, setBtnNuevo] = useState("Crear nuevo");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setTitulo("Actualizar Editorial");
            setBtnAtualizar(
                <Link to="/editoriales" className="btn btn-info text-white">
                    Nueva editorial
                </Link>
            );
            setBtnNuevo("Actualizar");
            (async () => {
                const res = await getEditorial(params.id);
                setIniValues(res);
            })();
        } else {
            setTitulo("Nuevo editorial");
            setBtnNuevo("Crear nuevo");
            setBtnAtualizar();
            setIniValues({
                nombre: "",
                autor: "",
                editorial: "",
            });
        }
    }, [params]);

    useEffect(() => {}, []);
    const validation = Yup.object({
        nombre: Yup.string().required("El nombre es requerido").nullable(),
        autor: Yup.string().required("El autor es requerido"),
        editorial: Yup.string().required("La editorial es requerida"),
    });
    return (
        <Container className="dashboard mb-5 card-bg">
            <Row className="pt-2 pb-4 justify-content-md-center">
                <Col lg={6} md={12}>
                    <h3 className="mb-5">{titulo}</h3>
                    <Formik
                        initialValues={iniValues}
                        validationSchema={validation}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            setSubmitting(true);
                            if (params.id) {
                                await updateEditorial(params.id, values);
                                navigate("/editoriales");
                            } else {
                                await createEditorial(values);
                            }
                            resetForm();
                            setSubmitting(false);
                            //navigate("/");
                        }}
                        enableReinitialize={true}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="align-items-center"
                            >
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Nombre
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="nombre"
                                                placeholder="Ingrese nombre es requerido"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nombre}
                                                className={`${
                                                    touched.nombre &&
                                                    errors.nombre
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.nombre}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nombre}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Autor
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="autor"
                                                placeholder="Ingrese código bodega"
                                                onChange={handleChange}
                                                onBlur={(e) => handleBlur}
                                                value={values.autor}
                                                className={`${
                                                    touched.autor &&
                                                    errors.autor
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.autor}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.autor}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Editorial:
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="editorial"
                                                placeholder="Ingrese dirección bodega"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.editorial}
                                                isInvalid={!!errors.editorial}
                                                className={`${
                                                    touched.editorial &&
                                                    errors.editorial
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.editorial}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="d-flex justify-content-around">
                                    <Button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        {btnNuevo}
                                    </Button>
                                    {btnAtualizar}
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default FormEditorial;
