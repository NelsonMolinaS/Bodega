import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Menu from "./layout/Menu/Menu";
import Sidebar from "./layout/Sidebar/Sidebar";
import Contenido from "./layout/Contenido/Contenido";
import { useLogged } from "./context/loggedContext";
import Login from "./layout/InicioSesion/Login";

import "./layout/Contenido/Contenido.css";
import { Toaster } from "react-hot-toast";

function App() {
    const { validateLogged } = useLogged();

    if (validateLogged()) {
        return <Login />;
    }
    return (
        <Row className="App">
            <Menu />
            <div className="dashboard d-flex">
                <div>
                    <Sidebar />
                </div>
                <div
                    style={{
                        flex: "1 1 auto",
                        display: "flex",
                        flexFlow: "column",
                        height: "100vh",
                        overflowY: "hidden",
                        marginTop: "25px",
                        marginLeft: "25px",
                    }}
                >
                    <div style={{ height: "100%" }}>
                        <div
                            style={{
                                height: "calc(100% - 64px)",
                                overflowY: "auto",
                            }}
                        >
                            <div className="card-section col-md-12">
                                <Contenido />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    );
}

export default App;
