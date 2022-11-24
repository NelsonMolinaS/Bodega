import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useLibros } from "../../context/librosContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";

function FormLibro() {
    const { createLibro, getLibro, updateLibro, getEditorial, editoriales } =
        useLibros();
    const navigate = useNavigate();
    const [iniValues, setIniValues] = useState({
        nombreLibro: "",
        editorial: "",
    });
    const [titulo, setTitulo] = useState("Nuevo libro");
    const [btnAtualizar, setBtnAtualizar] = useState();
    const [btnNuevo, setBtnNuevo] = useState("Crear libro");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            console.log(params.id);
            setTitulo("Actualizar libro");
            setBtnAtualizar(
                <Link to="/libros" className="btn btn-info text-white">
                    Nuevo libro
                </Link>
            );

            setBtnNuevo("Actualizar");
            (async () => {
                const res = await getLibro(params.id);
                console.log(res);
                setIniValues({
                    nombreLibro: res.nombreLibro,
                    editorial: res.idEditorial,
                });
            })();
        } else {
            setTitulo("Nuevo libro");
            setBtnNuevo("Crear libro");
            setBtnAtualizar();
            setIniValues({
                nombreLibro: "",
                editorial: "",
            });
        }
    }, [params]);

    const validation = Yup.object({
        nombreLibro: Yup.string().required("El nombre es requerido"),
        editorial: Yup.string().required("Seleccione una editorial"),
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
                                await updateLibro(params.id, values);
                                navigate("/libros");
                            } else {
                                await createLibro(values);
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
                                                name="nombreLibro"
                                                placeholder="Ingrese libro"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nombreLibro}
                                                className={`${
                                                    touched.nombreLibro &&
                                                    errors.nombreLibro
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.nombreLibro}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nombreLibro}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Editorial
                                            </InputGroup.Text>

                                            <Form.Select
                                                name="editorial"
                                                value={values.editorial}
                                                isInvalid={!!errors.editorial}
                                                onChange={handleChange}
                                                className={`${
                                                    touched.editorial &&
                                                    errors.editorial
                                                        ? "error"
                                                        : null
                                                }`}
                                            >
                                                <option>
                                                    Seleccionar cargo
                                                </option>
                                                {editoriales.map(
                                                    (editorial) => (
                                                        <option
                                                            key={
                                                                editorial.idEditorial
                                                            }
                                                            value={
                                                                editorial.idEditorial
                                                            }
                                                        >
                                                            {
                                                                editorial.editorial
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </Form.Select>

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

export default FormLibro;
