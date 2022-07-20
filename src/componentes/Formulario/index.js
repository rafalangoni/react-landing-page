import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    
    const desenho = ['Chaves', 'Chapolin'];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto label="Desenho" placeholder="(Chaves ou Chapolin)." />
                <CampoTexto label="Personagem" placeholder="Informe o personagem." />
                <CampoTexto label="Imagem" placeholder="Selecione a imagem do personagem." />
                <ListaSuspensa label="Desenho" itens={desenho}/>
            </form>
        </section>
    );
}

export default Formulario;