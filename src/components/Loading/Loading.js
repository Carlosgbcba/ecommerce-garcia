import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import './Loading.css'

export default function Loading() {
    const style = css`
        display: block;
        margin: 0 auto;
        border-color: black;
    `;

    return (
        <center className="loading" style={{height: "300px"}} >
            <BarLoader css={style} height="5" width="200" />
        </center>
    )
}
