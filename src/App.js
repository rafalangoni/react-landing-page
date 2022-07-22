import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
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

  const aoNovopersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovopersonagemAdicionado(personagem)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
