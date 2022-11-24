import React from "react";
import { Formik } from "formik";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useLogged } from "../../context/loggedContext";

function Login() {
    const { login } = useLogged();
    const navigate = useNavigate();

    const validation = Yup.object({
        username: Yup.string().required("* Ingresar usuario"),
        password: Yup.string().required("* Ingresar contraseña").nullable(),
    });

    return (
        <Container className="login-bg d-flex align-items-center justify-content-center">
            <Container className="form-bg ">
                <Row md={8}>
                    <Col
                        className="px-5 py-2 justify-content-center"
                        lg={6}
                        md={6}
                    >
                        <h3 className="mb-5">Iniciar sesión</h3>
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                            }}
                            validationSchema={validation}
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                setSubmitting(true);
                                const resultado = await login(values);
                                if (resultado) {
                                    localStorage.setItem(
                                        "user",
                                        JSON.stringify({
                                            cargo: resultado.idCargo,
                                        })
                                    );
                                    console.log(resultado);
                                    navigate(`/Inicio`);
                                } else {
                                    toast.error(
                                        "¡Usuario o contraseñas incorrectos!"
                                    );
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
                                    <Row className="align-items-center mb-4">
                                        <Form.Group as={Col}>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Ingrese usuario"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                                className={`${
                                                    touched.username &&
                                                    errors.username
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.username}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="align-items-center mb-4">
                                        <Form.Group as={Col}>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Ingrese contraseña"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className={`${
                                                    touched.password &&
                                                    errors.password
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="d-flex justify-content-around">
                                        <Button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Iniciar sesión
                                        </Button>
                                    </Form.Group>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col lg={6} md={6} className="p-0">
                        <div className="content-img">
                            <img
                                src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/04/396428-GettyImages-559106599-ForYou.jpg?w=1440"
                                className="img-login"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Login;
