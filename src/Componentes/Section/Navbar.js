import styles from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li className={styles.back}><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li className={styles.back}><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li className={styles.back}><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/kevinspredemann_/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/KevinSpredemann'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/kevin-spredemann-469200261/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar