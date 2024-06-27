import { useState } from "react";

function Joke() {
  const [joke, setJoke] = useState();

  async function fetchJoke() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    console.log("data", data);
    setJoke(data);
  }

  return (
    <div>
      This is our Joke component{" "}
      <button onClick={fetchJoke}> Click me for a joke! </button>
      <p>{joke?.setup}</p>
      <p>{joke?.punchline}</p>
    </div>
  );
}

export default Joke;
