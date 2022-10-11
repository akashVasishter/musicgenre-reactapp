import React, { useState } from "react";
import "./styles.css";

const albumsDB = {
  pop: [
    { name: "Thriller",desc: "Album by Michael Jackson", rating: "5/5" },
    { name: "Bad",desc: "Album by Michael Jackson", rating: "4.5/5" },
    { name: "Dangerous",desc: "Album by Michael Jackson", rating: "4/5" }
  ],
  rap: [
    { name: "All Eyez on Me",desc: "Album by Tupac Shakur", rating: "5/5" },
    { name: "Notorious",desc: "Album by Biggie Smalls", rating: "5/5" },
    { name: "Recovery",desc: "Album by Eminem", rating: "4.5/5" }
  ],
  Rock: [
    { name: "Highway to hell",desc: "Album by AC/DC", rating: "5/5" },
    { name: "Appetite for Destruction",desc: "Album by Guns N' Roses", rating: "4.5/5" },
    { name: "The Dark side of the Moon ",desc: "Album by Pink Floyd", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("rap");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎧MusicalGenres</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite music genres.select a genre to get started
      </p>
      <div>
        {Object.keys(albumsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            key={genre}
            style={{
              border: "1px solid black",
              width: "15%",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              margin: "0.5rem",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {albumsDB[selectedGenre].map((albums) => (
            <li
              key={albums.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "60%",
                margin: "2rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "X-larger",fontStyle: "italic",color: "chocolate" }}>{albums.name}</div> 
      
              <div style={{ fontSize: "large" }}>{albums.desc}</div>
              <div style={{ fontSize: "small" }}>{albums.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
