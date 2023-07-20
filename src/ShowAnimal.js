import './ShowAnimal.css';
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function ShowAnimal({ type }) {
  const [click, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(click + 1);
  };
  return (
    <div className='show-animal' onClick={handleClick}>
      <img className='animal' alt="animal" src={svgMap[type]}></img>
      <img className='heart' alt="heart" src={heart} style={{width : 10+10*click+'px'}}></img>
    </div>
  );
}

export default ShowAnimal;
