import { personagens } from './personagens';
import './App.css'

function App() {

  const personagensRedfield = personagens.filter(personagem => 
    personagem.nome.includes('Redfield'));

    return (
      <div>
        <h1>Personagens Redfield</h1>
        <ul>
          {
           personagensRedfield.map(personagem => {
              return (
                <div>
                  <h4> {personagem.nome}</h4>
                  <img src={personagem.url}alt="" />
                </div>
              )
            })
          }
        </ul>
      </div>
    )
}
 

export default App

