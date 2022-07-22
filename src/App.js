import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import ComponenteDesenho from './componentes/ListaDesenhos';

function App() {

  const listaDesenhos = [
    {
      nome: 'Chaves',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Chapolin',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Chespirito',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }
  return (
    <div>
      <Banner/>
      <Formulario listaDesenhos={listaDesenhos.map(personagem => personagem.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {listaDesenhos.map(listaDesenhos => <ComponenteDesenho 
        key={listaDesenhos.nome} 
        nome={listaDesenhos.nome}
        corPrimaria={listaDesenhos.corPrimaria}
        corSecundaria={listaDesenhos.corSecundaria}
        personagens={personagens.filter(personagem => personagem.listaDesenhos === listaDesenhos.nome)}
        />)}
    </div>
  );
}

export default App;