import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);
  const [colaboradoresOriginales, setColaboradoresOriginales] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    const nuevosColaboradores = [...colaboradores, { ...nuevoColaborador, id: Date.now().toString() }];
    setColaboradores(nuevosColaboradores);
    setColaboradoresOriginales(nuevosColaboradores);
    setAlerta({
      mensaje: "Colaborador agregado exitosamente",
      tipo: "success",
    });

    setTimeout(() => {
      setAlerta(null);
    }, 5000);
  };

  const buscarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = colaboradoresOriginales.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
    setColaboradores(colaboradoresFiltrados);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setColaboradoresOriginales(nuevosColaboradores);
    setAlerta({
      mensaje: "Colaborador eliminado exitosamente",
      tipo: "success",
    });

    setTimeout(() => {
      setAlerta(null);
    }, 5000);
  };

  return (
    <div className="container">
      <h1 className="titulo">Lista de colaboradores</h1>
      {alerta && (
        <Alert
          mensaje={alerta.mensaje}
          tipo={alerta.tipo}
          onClose={() => setAlerta(null)}
        />
      )}
      <Buscador onBuscarColaboradores={buscarColaboradores} />
      <div className="content-container">
        <Listado
          colaboradores={colaboradores}
          onEliminarColaborador={eliminarColaborador}
        />
        <Formulario
          onAgregarColaborador={agregarColaborador}
          setAlerta={setAlerta}
        />
      </div>
    </div>
  );
};

export default App;