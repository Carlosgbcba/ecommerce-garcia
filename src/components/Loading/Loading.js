import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import './Loading.css'

export default function Loading() {
    const style = css`
        display: block;
        margin: 0 auto;
        border-color: black;
    `;

    return (
        <center className="loading" style={{height: "300px"}} >
            <PulseLoader css={style} size={15} />
        </center>
    )
}
