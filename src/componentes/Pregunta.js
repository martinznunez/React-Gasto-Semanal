import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({
  setGuardarPresupuesto,
  setGuardarRestante,
  setMostrarPregunta,
}) => {
  const [cantidad, setGuardarCantidad] = useState(0);
  const [MostarrError, setError] = useState(false);

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      return setError(true);
    }
    setError(false);
    setGuardarRestante(cantidad);
    setGuardarPresupuesto(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {MostarrError ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setGuardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setGuardarPresupuesto: PropTypes.func.isRequired,
  setGuardarRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
