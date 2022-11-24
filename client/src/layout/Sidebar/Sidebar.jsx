import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#282c34">
                <CDBSidebarHeader
                    style={{ textAlign: "center" }}
                    prefix={<i className="fa fa-bars fa-large"></i>}
                >
                    <NavLink
                        style={{ textDecoration: "none", color: "white" }}
                        exact="true"
                        to="/Inicio"
                    >
                        Gestión Bodegas
                    </NavLink>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact="true" to="/bodegas">
                            <CDBSidebarMenuItem icon="columns">
                                Bodegas
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/libros">
                            <CDBSidebarMenuItem icon="table">
                                Libros
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/editoriales">
                            <CDBSidebarMenuItem icon="chart-line">
                                Editoriales
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/employees">
                            <CDBSidebarMenuItem icon="user">
                                Usuarios
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
}

export default Sidebar;
