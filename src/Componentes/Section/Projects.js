import ButtonB from '../Elements/ButtonB'
import styles from './Projects.module.css';
import Cards from '../Elements/Cards'
import Image1 from '../../Image/Projects/Vscode1.png';
import Image2 from '../../Image/Projects/Vscode2.png'

function Projects(){
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Cards
              img={Image1}
              title="Projeto Landing Page"
              tech="HTML, CSS e JS" 
              description="Projeto Base de uma landing page do curso de Tecnologia da Escola DNC."
              repo="https://github.com/KevinSpredemann/projeto-landing-page"
              site="https://projeto-landing-page-kevin-spredemann.netlify.app/"
            />
            <Cards
                img={Image2}
                title="Consumindo API"
                tech="HTML, CSS e JS" 
                description="Projeto de uma estrutura de formulário que capta informações de CEP e da Previsão do tempo da respectiva região."
                repo="https://github.com/KevinSpredemann/Consumindo-api"
                site="https://66396181ee937656ed591967--transcendent-heliotrope-26f0db.netlify.app/"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/KevinSpredemann'/>
        </div>
    )
}

export default Projects