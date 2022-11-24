import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useUsuarios } from "../../context/usuarioContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";

//import "./form.css";

const FormUsuario = () => {
    const { createUsuario, getUsuario, updateUsuario, getCargo, cargos } =
        useUsuarios();
    const navigate = useNavigate();
    const [iniValues, setIniValues] = useState({
        rut: "",
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: "",
        cargo: "",
    });
    const [titulo, setTitulo] = useState("Nuevo empleado");
    const [btnAtualizar, setBtnAtualizar] = useState();
    const [btnNuevo, setBtnNuevo] = useState("Crear empleado");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setTitulo("Actualizar empleado");
            setBtnAtualizar(
                <Link to="/employees" className="btn btn-info text-white">
                    Nuevo empleado
                </Link>
            );

            setBtnNuevo("Actualizar");
            (async () => {
                const res = await getUsuario(params.id);
                setIniValues({
                    rut: res.rut,
                    nombre: res.nombre,
                    apellido: res.apellido,
                    usuario: res.usuario,
                    contrasena: res.passwrd,
                    cargo: res.idCargo,
                });
            })();
        } else {
            setTitulo("Nuevo empleado");
            setBtnNuevo("Crear empleado");
            setBtnAtualizar();
            setIniValues({
                rut: "",
                nombre: "",
                apellido: "",
                usuario: "",
                contrasena: "",
                cargo: "",
            });
        }
    }, [params]);

    const validation = Yup.object({
        rut: Yup.string().required("El rut es requerido"),
        nombre: Yup.string().required("El nombre es requerido"),
        apellido: Yup.string().required("El apellido es requerido"),
        usuario: Yup.string().required("El usuario es requerido"),
        contrasena: Yup.string().required("La contraseña es requerida"),
        cargo: Yup.string().required("Seleccione un cargo"),
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
                                await updateUsuario(params.id, values);
                                navigate("/employees");
                            } else {
                                await createUsuario(values);
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
                                                Rut
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="rut"
                                                placeholder="Ingrese rut (11111111-1)"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.rut}
                                                className={`${
                                                    touched.rut && errors.rut
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.rut}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.rut}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Nombre
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="nombre"
                                                placeholder="Ingrese nombre"
                                                onChange={handleChange}
                                                onBlur={(e) => handleBlur}
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
                                                Apellido
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="apellido"
                                                placeholder="Ingrese apellido"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.apellido}
                                                isInvalid={!!errors.apellido}
                                                className={`${
                                                    touched.apellido &&
                                                    errors.apellido
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.apellido}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Usuario
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="usuario"
                                                placeholder="Ingrese usuario (jperez)"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.usuario}
                                                isInvalid={!!errors.usuario}
                                                className={`${
                                                    touched.usuario &&
                                                    errors.usuario
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.usuario}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Contraseña
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                name="contrasena"
                                                placeholder="Ingrese contraseña"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.contrasena}
                                                isInvalid={!!errors.contrasena}
                                                className={`${
                                                    touched.contrasena &&
                                                    errors.contrasena
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.contrasena}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Cargo
                                            </InputGroup.Text>

                                            <Form.Select
                                                placeholder="Cargo"
                                                name="cargo"
                                                value={values.cargo}
                                                isInvalid={!!errors.cargo}
                                                onChange={handleChange}
                                                className={`${
                                                    touched.cargo &&
                                                    errors.cargo
                                                        ? "error"
                                                        : null
                                                }`}
                                            >
                                                <option>
                                                    Seleccionar cargo
                                                </option>
                                                {cargos.map((cargo) => (
                                                    <option
                                                        key={cargo.idCargo}
                                                        value={cargo.idCargo}
                                                    >
                                                        {cargo.nombreCargo}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                            <Form.Control.Feedback type="invalid">
                                                {errors.cargo}
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
};

export default FormUsuario;
