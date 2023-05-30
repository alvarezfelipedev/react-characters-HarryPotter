import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementarContador() {
    if (contador < 10) {
      setContador(contador + 1);
    } else{
        alert("El tope es hasta 10!")
    }
  }

  function decrementarContador() {
    setContador(contador - 1);
  }

  function resetContador() {
    setContador(0);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={resetContador}>Reset</button>
    </div>
  );
}

export default Contador;
