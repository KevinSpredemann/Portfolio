import styles from './Cards.module.css';
import ButtonB from './ButtonB';

function Cards({img, title, tech, description, repo, site}){

    return (
        <div className={styles.cards}>
            <a href={site}>
                <img src={img} alt=""/>
            </a>

                 <section>
                 <h3>{title}</h3>
                 <p><strong>Tecnologias: </strong>{tech}</p>
                 <p>{description}</p>
                 <ButtonB text='Acesse o meu repositório' link={repo}/>
             </section>      
        </div>
    )
}

export default Cards