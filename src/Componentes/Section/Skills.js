import styles from './Skills.module.css';
import js from '../../Image/Skills/js.svg';
import html from '../../Image/Skills/html.svg';
import css from '../../Image/Skills/css.svg';
import react from '../../Image/Skills/react.svg';

function Skills(){
    return (
        <div className={styles.skills} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={js} alt=""/>
                <img src={html} alt=""/>
                <img src={css} alt=""/>
                <img src={react} alt=""/>
            </div>
        </div>
    )
}

export default Skills