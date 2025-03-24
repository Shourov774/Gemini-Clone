import React, { useContext } from "react";
import { Context } from "../context/context";

const Massege = () => {
    const {resultData} = useContext(Context);

    return (
        <>
            <p>{resultData}</p>
        </>
    )
}

export default Massege;