import { useState } from 'react'
import { Card } from '../src/Card'

function App() {
  const [nomeJogador, setNomeJogador] = useState('')
  const [posicao, setPosicao] = useState('')
  const [fotoJogador, setFotoJogador] = useState('')
  const [formularioErro, setFormularioErro] = useState(false)
  const [allJogadores, setAllJogadores] = useState([
    {
      id: 1,
      name: 'NEYMAR JR',
      position: 'Atacante',
      picture:
        'http://www.itajuba.mg.gov.br/wp-content/uploads/2020/07/neymar.jpeg'
    },
    {
      id: 2,
      name: 'Daniel Alves',
      position: 'Lateral Direito',
      picture:
        'https://img.r7.com/images/2014/06/09/3snp4np4li_1kf6ggiby3_file.jpg'
    },
    {
      id: 3,
      name: 'Marquinhos',
      position: 'Zagueiro',
      picture:
        'https://i.pinimg.com/474x/ec/f7/5c/ecf75c1c57c676834b0e663d7d8420a4.jpg'
    }
  ])

  const newJogador = {
    name: 'Marquinhos',
    position: 'Zagueiro',
    picture:
      'https://i.pinimg.com/474x/ec/f7/5c/ecf75c1c57c676834b0e663d7d8420a4.jpg'
  }

  function cadastrarJogador(event) {
    event.preventDefault()

    const novoJogadorCadastrado = {
      name: nomeJogador,
      position: posicao,
      picture: fotoJogador
    }

    if (nomeJogador === '' || posicao === '') {
      setFormularioErro(true)
    } else {
      setFormularioErro(false)

      setAllJogadores([...allJogadores, novoJogadorCadastrado])

      setNomeJogador('')
      posicao('')
      fotoJogador('')
    }
  }

  return (
    <main className="component">
      <div className="tittle-wrapper">
        <h1>Seleção Brasileira Copa 2022</h1>
        <h2>Aqui é você quem manda! Convoque os jogadores</h2>
        <p>
          Selecione a foto no link{' '}
          <a href="https://bit.ly/3Ee2YLA">https://bit.ly/3Ee2YLA</a>
        </p>
      </div>

      <form
        className={formularioErro ? 'form-error' : ''}
        onSubmit={event => cadastrarJogador(event)}
      >
        <div>
          <label htmlFor="nomeJogador">Nome: </label>
          <input
            id="nomeJogador"
            type="text"
            value={nomeJogador}
            onChange={event => setNomeJogador(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="posicao">Posicão: </label>
          <input
            id="posicao"
            type="text"
            value={posicao}
            onChange={event => setPosicao(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fotoJogador">Link da Foto: </label>
          <input
            id="fotoJogador"
            type="text"
            value={fotoJogador}
            onChange={event => setFotoJogador(event.target.value)}
          />
        </div>

        <button type="submit">Convocar Jogador</button>
      </form>

      {formularioErro ? <span>O seu formulário contem erros</span> : null}

      <section className="jogadores">
        {allJogadores.map(jogador => {
          return <Card jogadorData={jogador} />
        })}
      </section>
    </main>
  )
}

export default App
