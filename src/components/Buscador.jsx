import { useState } from "react";

const Buscador = ({ onBuscarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    onBuscarColaboradores(e.target.value);
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Buscar colaboradores"
        value={busqueda}
        onChange={handleChange}
        className="buscador-input"
      />
    </div>
  );
};

export default Buscador;
