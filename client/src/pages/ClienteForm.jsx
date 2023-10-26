import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useClient } from "../context/Provider.jsx";
import "../styles/clienteForm.css";

import Navbar from "../components/Navbar.jsx";

import { useEffect, useState } from "react";

function ClienteForm() {
  const { createCliente, getCliente, editarCliente } = useClient();
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    dni: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCliente = async () => {
      if (params.id) {
        const cliente = await getCliente(params.id);
        setCliente({
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          dni: cliente.dni,
        });
      }
    };
    loadCliente();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="page-form-client">
        <h1 className="title">{params.id ? "Editar cliente" : "Añadir cliente"}</h1>

        <Formik
          initialValues={cliente}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await editarCliente(params.id, values);
              navigate("/client");
            } else {
              await createCliente(values);
              navigate("/client");
            }
            setCliente({
              nombre: "",
              apellido: "",
              dni: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="form">
              <label htmlFor="" className="leabel">
                nombre
              </label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
                required="true"
                className="input"
              />

              <label htmlFor="" className="leabel">
                apellido
              </label>
              <input
                type="text"
                name="apellido"
                onChange={handleChange}
                value={values.apellido}
                required="true"
                className="input"
              />

              <label htmlFor="" className="leabel">
                dni
              </label>
              <input
                type="number"
                name="dni"
                onChange={handleChange}
                value={values.dni}
                required="true"
                className="input"
              />

              <button type="submit" className="button" disabled={isSubmitting}>
                {isSubmitting ? "guardando" : "guardar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ClienteForm;
