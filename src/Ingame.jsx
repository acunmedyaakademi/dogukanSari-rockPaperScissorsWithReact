import './App.css'

function App2() {
  return(
    <>
      <div className="container">
        <ScoreboardContainer />
        <GamePick />
        <RulesBtn />
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
          <h3>12</h3>
        </div>
      </div>
  )
}

function GamePick() {
  return(
    <div className="game-pick">
        <div className="you-picked">
          <h1>YOU PICKED</h1>
          <p><span><img src="assets/img/paper.svg" alt=""/></span></p>
        </div>

        <div className="house-picked">
          <h1>THE HOUSE PICKED</h1>
          <p><span><img src="assets/img/rock.svg" alt=""/></span></p>
        </div>
      </div>
  )
}

function RulesBtn() {
  return(
    <div className="rulesbutton">
      <button>Rules</button>
    </div>
  )
}

export default App2