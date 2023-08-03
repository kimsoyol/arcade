import React, { useEffect, useState } from "react";
import "./memesmory.css";
const memesCards = [
  {
    id: 1,
    name: "Disaster Girl",
    url: "https://i.imgflip.com/23ls.jpg",
  },
  {
    id: 2,
    name: "One Does Not Simply",
    url: "https://i.imgflip.com/1bij.jpg",
  },
  {
    id: 3,
    name: "Ancient Aliens",
    url: "https://i.imgflip.com/26am.jpg",
  },
  {
    id: 4,
    name: "Success Kid",
    url: "https://i.imgflip.com/1bhk.jpg",
  },
  {
    id: 5,
    name: "Is This A Pigeon",
    url: "https://i.imgflip.com/1o00in.jpg",
  },
  {
    id: 6,
    name: "Y'all Got Any More Of That",
    url: "https://i.imgflip.com/21uy0f.jpg",
  },
  {
    id: 7,
    name: "Oprah You Get A",
    url: "https://i.imgflip.com/gtj5t.jpg",
  },
  {
    id: 8,
    name: "Bernie Sanders",
    url: "https://i.imgflip.com/3pdf2w.png",
  },
  {
    id: 9,
    name: "Laughing Leo",
    url: "https://i.imgflip.com/4acd7j.png",
  },
  {
    id: 10,
    name: "Think About It",
    url: "https://i.imgflip.com/1h7in3.jpg",
  },
  {
    id: 11,
    name: "spiderman pointing at spiderman",
    url: "https://i.imgflip.com/1tkjq9.jpg",
  },
  {
    id: 12,
    name: "Squidward window",
    url: "https://i.imgflip.com/145qvv.jpg",
  },
  {
    id: 13,
    name: "Grandma Finds The Internet",
    url: "https://i.imgflip.com/1bhw.jpg",
  },
  {
    id: 14,
    name: "Futurama Fry",
    url: "https://i.imgflip.com/1bgw.jpg",
  },
  {
    id: 15,
    name: "Interesting Man",
    url: "https://i.imgflip.com/1bh8.jpg",
  },
  {
    id: 16,
    name: "look at me",
    url: "https://i.imgflip.com/hmt3v.jpg",
  },
  {
    id: 17,
    name: "Leonardo Cheers",
    url: "https://i.imgflip.com/39t1o.jpg",
  },
  {
    id: 18,
    name: "Skeptical Kid",
    url: "https://i.imgflip.com/265k.jpg",
  },
  {
    id: 19,
    name: "Three-headed dragon",
    url: "https://i.imgflip.com/33e92f.jpg",
  },
  {
    id: 20,
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

function Cards({handleClick, clickedCards}) {
  const [memes, setMemes] = useState(memesCards);
  const [cards, setCards] = useState();

  useEffect(() => {
    const easy = memes.slice(0, 6);
    setCards(shuffleArray(easy));
    console.log("card effect");
  },[clickedCards]);


  return (
    <>
      {!cards && <div>Loading....</div>}
      {cards && (
        <div className="cards-container place-content-center ">
          {cards.map((meme) => (
            <div
              key={meme.id}
              className="car bg-no-repeat bg-cover"
              onClick={() => handleClick(meme.id)}
            >
              <img src={meme.url} alt="" className="card_img" />
              <p className="card_text">{meme.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
