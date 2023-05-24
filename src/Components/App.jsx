/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import "../StylesComponents/App.css";
import { useState, useEffect } from "react";

function App() {
  // setear los hooks de useState
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  // traer los datos de la API
  const showData = async () => {
    const response = await fetch("https://hp-api.onrender.com/api/characters/");
    const data = await response.json();
    const dataFilter = data.filter(
      (personajeImage) => personajeImage.image != ""
    );
    setCharacters(dataFilter);
  };

  // funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // metodo de filtrado
  let results = [];
  if (!search) {
    results = characters;
  } else {
    results = characters.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);

  // renderizamos la vista

  return (
    <div>
      <h2 className="h2">Hello world!</h2>
      <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <label htmlFor={characters}>Selecciona una casa</label>
        <select id="house" name="house">
          <option value="volvo">Gryffindor</option>
          <option value="saab">Slytherin</option>
          <option value="mercedes">Hufflepuff</option>
          <option value="audi">Ravenclaw</option>
        </select>
      </div>
      <section>
        {results.map((personaje) => (
          <div key={personaje.id}>
            <h3>Nombre: {personaje.name}</h3>
            <p>Genero: {personaje.gender}</p>
            <p>Equipo: {personaje.house}</p>
            <p>Fecha de cumpleaños: {personaje.dateOfBirth}</p>
            <img src={personaje.image} alt="" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
