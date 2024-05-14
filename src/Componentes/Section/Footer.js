import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/kevinspredemann_/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/KevinSpredemann'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/kevin-spredemann-469200261/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>KevinSpredemann50@gmail.com</p>
            <p>Kevin Ruan © 2024</p>
        </div>
    )
}

export default Footer