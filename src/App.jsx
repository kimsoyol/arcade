import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex gap-5 justify-center items-center place-items-center pt-14">
        <div>
          <Link to="memes-mory">
            <img
              className="rounded w-36 h-36"
              src="assets/memes/memesLogo.png"
              alt="memes img"
            />
            <p className="pt-2"> Memes-mory </p>
          </Link>
        </div>
        <div>
          <Link to="tic-tac-toe">
            <img
              className="rounded w-36 h-36"
              src="src/assets/tic-tac-toe/ttt.png"
              alt="tic tac toe img"
            />
            <p className="pt-2">Tic Tac Toe</p>
          </Link>
        </div>

        <div>
          <Link to="Weather">
            <img
              className="rounded w-36 h-36"
              src="src/assets/weather/weatherLogo.png"
              alt="weather img"
            />
            <p className="pt-2"> Weather </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
