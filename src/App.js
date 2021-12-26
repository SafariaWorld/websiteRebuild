
import './App.css';
import logo from "./assets/Safaria_header_logo.png";
import mainLogo from "./assets/Safaria.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav> 
          <img src={logo} id="headerLogo" /> 

          <ul class="headerText">
              <li>
                <a href="#"> Home </a>
              </li>

              <li>
                <a href="#"> Roadmap </a>
              </li>

              <li>
                <a href="#"> About </a>
              </li>

              <li>
                <a href="#"> Updates </a>
              </li>

              <li>
                <a href="#"> Collections </a>
              </li>

              <li>
                <a href="#"> Lore </a>
              </li>
          </ul>
            
          <ul class="socialLinks">
            <li> 
              <a href="#"> Discord </a>
            </li>
            <li> 
              <a href="#"> Twitter </a>
            </li>
          </ul>
        </nav>

        <div class="mainHeader"> 
          <img src={mainLogo} id="mainLogo" /> 
          <h2> Find riches, explore ancient mysteries, and become a treasure
            hunter in this CNFT Gamified World! </h2> 

            <div id="headerButtons">
              <button id="collectionButton"> Our Collections </button>
              <button id="mintButton"> Mint a Treasure Hunter </button>
            </div> 

        </div>

      </header>

      <body>
        <main>
          <h2> Content </h2> 
        </main>
      </body>
    </div>
  );
}

export default App;
