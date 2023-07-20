import { useState } from "react";
import ShowAnimal from "./ShowAnimal";
function getRandomAnimal() {
  const animals = ["cow", "bird","cat","dog","gator","horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [rand, setAnimal] = useState([]);
  const handleAnimal = () => {
    setAnimal([...rand, getRandomAnimal()]);
  };
  const renderAnimals = rand.map((animal,index)=>{
    return(<ShowAnimal type={animal} index={index}/>)
  })
  return (
    <div>
      <button onClick={handleAnimal}>Add user</button>
      <div>{renderAnimals}</div>
    </div>
  );
}

export default App;
