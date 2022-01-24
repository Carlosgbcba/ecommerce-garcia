import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <br />
            <center>
                &copy; Copyright SELECTO CLOTHES
                <br />
                <br />

                <a href="https://www.linkedin.com/in/carlos-garcia-barrera-4b729219a/" className="link" target="_blank" rel="noreferrer">
                    <FaLinkedin style={{ fontSize: "25px",  marginRight: "10px" }} /> 
                </a>

                <a href="https://github.com/Carlosgbcba/ecommerce-garcia" className="link" target="_blank" rel="noreferrer">
                    <FaGithub style={{ fontSize: "25px",  marginLeft: "10px" }} /> 
                </a>


            </center>
            <br />
        </footer>
    )
}