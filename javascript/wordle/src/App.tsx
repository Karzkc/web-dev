import React, { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);

  const handleWordApi = async () => {
    try {
      const res = await fetch("https://api.frontendexpert.io/api/fe/wordle-words");
      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
      }
      const wordsArray = await res.json();

      if (!Array.isArray(wordsArray) || wordsArray.length === 0) {
        throw new Error("Unexpected API response format or empty array");
      }

      const randomWord =
        wordsArray[Math.floor(Math.random() * wordsArray.length)];
      setWord(randomWord);
    } catch (err) {
      console.error("Fetch word failed:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    handleWordApi();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Wordle Clone – Random 5-Letter Word</h2>
      {error ? <p style={{ color: 'red' }}>Error: {error}</p> : <p>{word || "Loading..."}</p>}
    </div>
  );
}

export default App;
p