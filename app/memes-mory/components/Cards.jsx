"use client";

import styles from './cards.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";
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

function Cards({ handleClick, difficultyLevel }) {
  const [memes, setMemes] = useState(memesCards);
  const [cards, setCards] = useState();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // shuffle cards before slice
    const shuffledMemes = shuffleArray(memes);
    // get difficulty level
    const numCards =
      difficultyLevel === "easy" ? 6 : difficultyLevel === "medium" ? 12 : 18;
    // slice cards depends on difficulty level
    setCards(shuffledMemes.slice(0, numCards));

  }, [difficultyLevel, memes]);

  const handleShuffle = async() => {
    // flip all cards
    setIsFlipped(true)
    // disable pointer events while shuffling
    setIsShuffling(true)

    // after a delay, shuffle the cards and flip them back
    setTimeout(() => {
      setCards(shuffleArray(cards))
      setIsFlipped(false);
    }, 800)

    // enable pointer evnets after shuffling
    setTimeout(() => {
      setIsShuffling(false);
    }, 1200)

  };

  return (
    <>
      {!cards && <div className="place-content-center">Loading....</div>}
      {cards && (
        <div className={`${styles.cards} ${isShuffling ? styles.disable_pointer: ''}`}>
          {cards.map((meme) => (
            <div key={meme.id} onClick={() => handleClick(meme.id)} 
            className={`${styles.card_container} ${isFlipped ? styles.back : ''}`}>
          
              <div
                className={styles.card_inner}
                onClick={handleShuffle}
              >
                <div className={styles.card_front}>
                  <div className={styles.card}>
                    <Image src={meme.url} alt="" className={styles.card_image} width={500} height={500} />
                    <p className="card_text">{meme.name}</p>
                  </div>  
                </div>
                <div className={styles.card_back}>
                  <Image
                    src="https://i.imgflip.com/1bhk.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className={styles.back}
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
