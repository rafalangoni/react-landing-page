import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    
    const desenho = ['Chaves', 'Chapolin']

    const aoSalvar =  (evento) =>{
        evento.preventDefault();
        console.log("form submetido")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto obrigatorio={true} label="Desenho" placeholder="(Chaves ou Chapolin)." />
                <CampoTexto obrigatorio={true} label="Personagem" placeholder="Informe o personagem." />
                <CampoTexto label="Imagem" placeholder="Selecione a imagem do personagem." />
                <ListaSuspensa obrigatorio={true} label="Desenho" itens={desenho}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;