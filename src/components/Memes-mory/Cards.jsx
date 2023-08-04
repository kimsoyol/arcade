import React, { useEffect, useState, useRef } from "react";
import uniqid from "uniqid"
import "./memesmory.css";
const memesCards = [
  {
    num: 1,
    name: "Disaster Girl",
    url: "https://i.imgflip.com/23ls.jpg",
  },
  {
    id: 2,
    name: "One Does Not Simply",
    url: "https://i.imgflip.com/1bij.jpg",
  },
  {
    num: 3,
    name: "Ancient Aliens",
    url: "https://i.imgflip.com/26am.jpg",
  },
  {
    num: 5,
    name: "Is This A Pigeon",
    url: "https://i.imgflip.com/1o00in.jpg",
  },
  {
    num: 6,
    name: "Y'all Got Any More Of That",
    url: "https://i.imgflip.com/21uy0f.jpg",
  },
  {
    num: 7,
    name: "Oprah You Get A",
    url: "https://i.imgflip.com/gtj5t.jpg",
  },
  {
    num: 8,
    name: "Bernie Sanders",
    url: "https://i.imgflip.com/3pdf2w.png",
  },
  {
    num: 9,
    name: "Laughing Leo",
    url: "https://i.imgflip.com/4acd7j.png",
  },
  {
    num: 10,
    name: "Think About It",
    url: "https://i.imgflip.com/1h7in3.jpg",
  },
  {
    num: 11,
    name: "spiderman pointing at spiderman",
    url: "https://i.imgflip.com/1tkjq9.jpg",
  },
  {
    num: 12,
    name: "Squidward window",
    url: "https://i.imgflip.com/145qvv.jpg",
  },
  {
    num: 13,
    name: "Grandma Finds The Internet",
    url: "https://i.imgflip.com/1bhw.jpg",
  },
  {
    num: 14,
    name: "Futurama Fry",
    url: "https://i.imgflip.com/1bgw.jpg",
  },
  {
    num: 15,
    name: "Interesting Man",
    url: "https://i.imgflip.com/1bh8.jpg",
  },
  {
    num: 16,
    name: "look at me",
    url: "https://i.imgflip.com/hmt3v.jpg",
  },
  {
    num: 17,
    name: "Leonardo Cheers",
    url: "https://i.imgflip.com/39t1o.jpg",
  },

  {
    num: 19,
    name: "Three-headed dragon",
    url: "https://i.imgflip.com/33e92f.jpg",
  },
  {
    num: 20,
    name: "Charlie Conspiracy",
    url: "https://i.imgflip.com/1itoun.jpg",
  },
];
function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Cards({ handleClick, difficultyLevel }) {
  const [memes, setMemes] = useState(memesCards);
  const [cards, setCards] = useState();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // shuffle cards before slice
    const shuffledMemes = shuffleArray(memes);
    // get difficulty level
    const numCards =
      difficultyLevel === "easy" ? 6 : difficultyLevel === "medium" ? 12 : 18;
    // slice cards depends on difficulty level
    setCards(shuffledMemes.slice(0, numCards));

    console.log("card effect");
  }, [difficultyLevel]);

  const handleShuffle = () => {
    setCards(cards.map((c)=>c.id = uniqid()))

    setIsFlipped(true);
    setCards(shuffleArray(cards))

    setTimeout(() => {
      setIsFlipped(false);
    }, 400);

    console.log("flip");
  };

  return (
    <>
      {!cards && <div>Loading....</div>}
      {cards && (
        <div className="cards_container place-content-center">
          {cards.map((meme) => (
            <div key={meme.num} onClick={() => handleClick(meme.num)}>
              <div
                className={`card_inner ${isFlipped ? "open" : ""}`}
                onClick={handleShuffle}
              >
                <div className="card_front">
                  <img src={meme.url} alt="" className="card_img" />
                  <p className="card_text">{meme.name}</p>
                </div>
                <div className="card_back">
                  <img
                    src="https://i.imgflip.com/1bhk.jpg"
                    alt=""
                    className="card_img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
