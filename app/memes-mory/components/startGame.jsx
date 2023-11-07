import Image from "next/image";


function ChooseLevel({ handleLevel }) {
  return (
    <div>
      <div className="flex justify-center items-center pt-8 gap-4">
        <button className="lvl-btn" onClick={() => handleLevel("easy")}>
          Easy
        </button>
        <button className="lvl-btn" onClick={() => handleLevel("medium")}>
          Medium
        </button>
        <button className="lvl-btn" onClick={() => handleLevel("hard")}>
          Hard
        </button>
      </div>
        <div className="flex justify-center pt-4">
      <Image src="https://i.imgur.com/6VS23Ci.jpg" width={500} height={500} alt="" />
        </div>
    </div>
  );
}

export default ChooseLevel;