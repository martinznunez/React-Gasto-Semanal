import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import uuid from "uuid/dist/v4";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setGuardarNombre] = useState("");
  const [inpuCantidad, setInputGuardarCantidad] = useState();
  const [error, setError] = useState(false);

  const AgregarGasto = (e) => {
    e.preventDefault();

    if (inpuCantidad < 1 || isNaN(inpuCantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    const gasto = {
      nombre: nombre,
      cantidad: inpuCantidad,
      id: uuid(),
    };

    setGasto(gasto);
    setCrearGasto(true);
    setGuardarNombre("");
    setInputGuardarCantidad(0);
  };

  //   construir un gasto

  return (
    <form onSubmit={AgregarGasto}>
      <h2>Agregar tus gasto aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del Gasto </label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Trasporte"
          value={nombre}
          onChange={(e) => setGuardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del Gasto </label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={inpuCantidad}
          onChange={(e) =>
            setInputGuardarCantidad(parseInt(e.target.value, 10))
          }
        />
      </div>
      <input
        type="submit"
        className="button-primary full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
