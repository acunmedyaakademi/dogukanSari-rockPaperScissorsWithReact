import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <ScoreboardContainer />
        <Game />
        <GamePick />
        <RulesBtn />
        <Dialog />
      </div>
    </>
  )
}

function ScoreboardContainer() {
  return(
    <div className="scoreboard-container">
      <div className="scoreboard-text">
        <h2>
          ROCK<br />
          PAPER <br />
          SCISSORS
        </h2>
      </div>

      <div className="scoreboard">
        <p>SCORE</p>
        <h3>0</h3>
      </div>
    </div>
  )
}

function Game() {
  return(
    <div className="game">
      <div className="gamebuttons">
        <div className="gamebuttons-item">
          <button className="paper">
            <img src="/images/paper.svg" alt="paper" />
          </button>

          <button className="scissors">
            <img src="/images/scissors.svg" alt="scissors" />
          </button>
        </div>
        <div className="rockdiv">
          <button className="rock">
            <img src="/images/rock.svg" alt="rock" />
          </button>
        </div>
      </div>
    </div>
  )
}

function GamePick() {
  return(
    <div className="game-pick">
        <div className="you-picked">
          <h1>YOU PICKED</h1>
          <p><span id="playerChoice"></span></p>
        </div>

        <div className="winscreen">
          <h2 id="gameResult">YOU WIN</h2>
          <a className="playagain" href="index.html">PLAY AGAIN</a>
        </div>

        <div className="house-picked">
          <h1>THE HOUSE PICKED</h1>
          <p><span id="cpuChoice"></span></p>
        </div>
      </div>
  )
}

function RulesBtn() {
  function handleModalShow() {
    modal.showModal();
  }

  return(
    <div className="rulesbutton">
        <button id='openRules' onClick={handleModalShow}>Rules</button>
    </div>
  )

}

function Dialog() {
  function handleModalClose() {
    modal.close();
  }

  return(
    <dialog id='modal'>
        <div className="modal-content">
          <span className="close" onClick={handleModalClose}>&times;</span>
          <img src="/images/rules.svg" alt="Game Rules"/>
        </div>
    </dialog>
  )
}



export default App
