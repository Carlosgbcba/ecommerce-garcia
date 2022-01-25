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

                <a className="socialMedia" href="https://www.linkedin.com/in/carlos-garcia-barrera-4b729219a/" target="_blank" rel="noreferrer">
                    <FaLinkedin style={{ fontSize: "25px",  marginRight: "10px" }} /> 
                </a>

                <a className="socialMedia" href="https://github.com/Carlosgbcba/ecommerce-garcia" target="_blank" rel="noreferrer">
                    <FaGithub style={{ fontSize: "25px",  marginLeft: "10px" }} /> 
                </a>


            </center>
            <br />
        </footer>
    )
}