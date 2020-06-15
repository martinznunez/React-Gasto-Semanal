import React, { useState, useEffect } from "react";
import Pregunta from "./componentes/Pregunta";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import ControlPresupuesto from "./componentes/ControlPresupuesto";

function App() {
  const [presupuesto, setGuardarPresupuesto] = useState(0);
  const [restante, setGuardarRestante] = useState(0);
  const [mostrarPreguta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      setGastos([...gastos, gasto]);
    }

    const presupuestoRestante = restante - gasto.cantidad;
    setGuardarRestante(presupuestoRestante);

    setCrearGasto(false);
  }, [gasto]);

  return (
    <div>
      <header>
        <h1>GASTO SEMANAL</h1>
        <div className="contenido-principal contenido">
          {mostrarPreguta ? (
            <Pregunta
              presupuesto={presupuesto}
              setGuardarPresupuesto={setGuardarPresupuesto}
              restante={restante}
              setGuardarRestante={setGuardarRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
