import Personagem from '../Personagem'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor : props.corSecundaria}

    return (
        (props.personagens.length > 0) ?        
        <section className="time" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="personagens">
                {props.personagens.map(personagem => <Personagem corDeFundo={props.corPrimaria} key={personagem.nome} nome={personagem.nome} imagem={personagem.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time