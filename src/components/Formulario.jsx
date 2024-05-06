import { useState } from "react";
import './Formulario.css';

const Formulario = ({ onAgregarColaborador, setAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(nuevoColaborador).some((value) => value === "")) {
      setAlerta({
        mensaje: "Todos los campos son obligatorios",
        tipo: "danger",
      });
    } else {
      onAgregarColaborador({ ...nuevoColaborador, id: Date.now().toString() });
      setNuevoColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setAlerta({
        mensaje: "Colaborador agregado exitosamente",
        tipo: "success",
      });
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          className="input"
          type="text"
          name="nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
          placeholder="Nombre del colaborador"
        />
        <input
          className="input"
          type="email"
          name="correo"
          value={nuevoColaborador.correo}
          onChange={handleChange}
          placeholder="Correo del colaborador"
        />
        <input
          className="input"
          type="number"
          name="edad"
          value={nuevoColaborador.edad}
          onChange={handleChange}
          placeholder="Edad del colaborador"
        />
        <input
          className="input"
          type="text"
          name="cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
          placeholder="Cargo del colaborador"
        />
        <input
          className="input"
          type="tel"
          name="telefono"
          value={nuevoColaborador.telefono}
          onChange={handleChange}
          placeholder="Telefono del colaborador"
        />

        <button type="submit" className="btn btn-success">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;
