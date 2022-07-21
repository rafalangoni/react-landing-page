import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) =>{
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }
  return (
    <div>
      <Banner/>
      <Formulario aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
    </div>
  );
}

export default App;