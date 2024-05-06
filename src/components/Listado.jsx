import React from "react";
import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores, onEliminarColaborador }) => {
  return (
    <div className="listado-container">
      <h2>Listado de Colaboradores</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onEliminarColaborador(colaborador.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
