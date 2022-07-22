import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const [desenho, setDesenho] = useState('');
    const [personagem, setPersonagem] = useState('');
    const [imagem, setImagem] = useState('');
    const [escolhaDesenho, setEscolhaDesenho] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPersonagemCadastrado({
            desenho,
            personagem, 
            imagem,
            escolhaDesenho
        })
        setDesenho('')
        setPersonagem('')
        setImagem('')
        setEscolhaDesenho('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Desenho"
                    placeholder="(Chaves ou Chapolin)."
                    valor={desenho}
                    aoAlterado={valor => setDesenho(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Personagem"
                    placeholder="Informe o personagem."
                    valor={personagem}
                    aoAlterado={valor => setPersonagem(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Selecione a imagem do personagem."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Desenho"
                    itens={props.listaDesenhos}
                    valor={escolhaDesenho}
                    aoAlterado={valor => setEscolhaDesenho(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;