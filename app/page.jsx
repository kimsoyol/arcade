import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Page() {

  return (
    <>
      <div className="flex gap-5 justify-center items-center place-items-center pt-14 flex-wrap">
        <div>
          <Link href="/memes-mory">
            <Image
              className="rounded w-36 h-36"
              src="https://i.imgur.com/rxGpYW9.jpg"
              width={500}
              height={500}
              alt="memes img"
            />
            <p className="pt-2  text-center"> Memes-mory </p>
          </Link>
        </div>
        <div>
          <Link href="/weather">
          <Image
              className="rounded w-36 h-36"
              src="https://i.imgur.com/FO0NxoW.png"
              width={500}
              height={500}
              alt="weather img"
            />
            <p className="pt-2  text-center"> Weather </p>
          </Link>
        </div>
        <div>
        <div>
          <Link href="tic-tac-toe">
            <Image
              className="rounded w-36 h-36"
              src="https://i.imgur.com/WAZDLPd.png"
              width={500}
              height={500}
              alt="tic tac toe img"
            />
            <p className="pt-2 text-center">Tic Tac Toe</p>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}
