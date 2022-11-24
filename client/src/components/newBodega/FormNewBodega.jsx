import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useBodegas } from "../../context/bodegaContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";

import "./form.css";

function FormNewBodega() {
    const { createBodega, getBodega, updateBodega } = useBodegas();
    const navigate = useNavigate();
    const [iniValues, setIniValues] = useState({
        nombreBodega: "",
        codBodega: "",
        direccion: "",
    });
    const [titulo, setTitulo] = useState("Nueva bodega");
    const [btnAtualizar, setBtnAtualizar] = useState();
    const [btnNuevo, setBtnNuevo] = useState("Crear nuevo");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setTitulo("Actualizar bodega");
            setBtnAtualizar(
                <Link to="/bodegas" className="btn btn-info text-white">
                    Nueva bodega
                </Link>
            );
            setBtnNuevo("Actualizar");
            (async () => {
                const res = await getBodega(params.id);
                setIniValues(res);
            })();
        } else {
            setTitulo("Nueva bodega");
            setBtnNuevo("Crear nuevo");
            setBtnAtualizar();
            setIniValues({
                nombreBodega: "",
                codBodega: "",
                direccion: "",
            });
        }
    }, [params]);

    useEffect(() => {}, []);
    const validation = Yup.object({
        nombreBodega: Yup.string()
            .required("El nombre es requerido")
            .nullable(),
        codBodega: Yup.string().required("El código es requerido"),
        direccion: Yup.string().required("La dirección es requerida"),
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
                                await updateBodega(params.id, values);
                                navigate("/bodegas");
                            } else {
                                await createBodega(values);
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
                                                Nombre bodega
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="nombreBodega"
                                                placeholder="Ingrese nombre de bodega"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nombreBodega}
                                                className={`${
                                                    touched.nombreBodega &&
                                                    errors.nombreBodega
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={
                                                    !!errors.nombreBodega
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nombreBodega}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Código bodega
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="codBodega"
                                                placeholder="Ingrese código bodega"
                                                onChange={handleChange}
                                                onBlur={(e) => handleBlur}
                                                value={values.codBodega}
                                                className={`${
                                                    touched.codBodega &&
                                                    errors.codBodega
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.codBodega}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.codBodega}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Direccion bodega
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="direccion"
                                                placeholder="Ingrese dirección bodega"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.direccion}
                                                isInvalid={!!errors.direccion}
                                                className={`${
                                                    touched.direccion &&
                                                    errors.direccion
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.direccion}
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

export default FormNewBodega;
