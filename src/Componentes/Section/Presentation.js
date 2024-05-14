import styles from './Presentation.module.css';
import ButtonA from '../Elements/ButtonA';

function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Porfólio</strong></h4>
            <h1>Olá, eu sou Kevin Ruan!</h1>
            <p>
            Cresci fascinado por telas e videogames, o que me levou<br/>
            a explorar o mundo da programação. Recentemente, iniciei<br/>
            um curso na Escola DNC para aprimorar minhas habilidades<br/>
            nessa área e desde então tenho certeza de que é aqui que quero<br/>
            construir minha carreira. Estou constantemente buscando novidades<br/>
            e me aprimorando, tanto dentro quanto fora do curso. Meu objetivo é<br/>
            imergir completamente neste campo e continuar aprendendo<br/>
            e crescendo como profissional.
            </p>
            <ButtonA link='https://github.com/KevinSpredemann' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation