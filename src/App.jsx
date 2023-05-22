/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import { Text } from "@chakra-ui/react";

import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      <Text backgroundColor="blue.400">Hello world!</Text>
      <section class="">
        {data &&
          data
            .filter((character) => character.image !== "")
            .map((character) => (
              <div key={character.name}>
                <h3>Nombre: {character.name}</h3>
                <p>Genero: {character.gender}</p>
                <p>Equipo: {character.house}</p>
                <p>Fecha de cumpleaños: {character.dateOfBirth}</p>
                <img src={character.image} alt="" />
              </div>
            ))}
      </section>
    </div>
  );
}

export default App;
