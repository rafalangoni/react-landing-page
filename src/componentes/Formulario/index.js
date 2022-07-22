import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const [personagem, setPersonagem] = useState('');
    const [temporada, setTemporada] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPersonagemCadastrado({
            personagem, 
            temporada,
            imagem,
            time
        })
        setPersonagem('')
        setTemporada('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Personagem"
                    placeholder="Informe o personagem."
                    valor={personagem}
                    aoAlterado={valor => setPersonagem(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Temporada"
                    placeholder="Informe a temporada."
                    valor={temporada}
                    aoAlterado={valor => setTemporada(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Selecione a imagem do personagem."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;