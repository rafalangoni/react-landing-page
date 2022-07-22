import './ComponenteDesenho.css'

const ComponenteDesenho = (props) => {
    return (
        <section className="componente-desenho">
            <h3>{props.nome}</h3>
        </section>
    )
}

export default ComponenteDesenho;