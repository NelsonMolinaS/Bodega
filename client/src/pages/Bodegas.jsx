import React from "react";
import FormNewBodega from "../components/newBodega/FormNewBodega";
import ListBodegas from "../components/newBodega/ListBodegas";

import "../layout/Contenido/Contenido.css";

function Bodegas() {
    return (
        <div>
            <FormNewBodega />
            <ListBodegas />
        </div>
    );
}

export default Bodegas;
