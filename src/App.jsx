import { Link } from "react-router-dom";
import {useEffect} from "react";
function App() {

  return (
    <>
      <div className="flex gap-5 justify-center items-center place-items-center pt-14 flex-wrap">
        <div>
          <Link to="memes-mory">
            <img
              className="rounded w-36 h-36"
              src="https://i.imgur.com/rxGpYW9.jpg"
              alt="memes img"
            />
            <p className="pt-2  text-center"> Memes-mory </p>
          </Link>
        </div>
        <div>
          <Link to="tic-tac-toe">
            <img
              className="rounded w-36 h-36"
              src="https://i.imgur.com/WAZDLPd.png"
              alt="tic tac toe img"
            />
            <p className="pt-2 text-center">Tic Tac Toe</p>
          </Link>
        </div>

        <div>
          <Link to="Weather">
            <img
              className="rounded w-36 h-36"
              src="https://i.imgur.com/FO0NxoW.png"
              alt="weather img"
            />
            <p className="pt-2  text-center"> Weather </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
