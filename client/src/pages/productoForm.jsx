import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { createProductoRequest } from "../apis/producto.api";
import "../styles/clienteForm.css";

import Navbar from "../components/Navbar.jsx";

import React from "react";

function ProductForm() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="page-form-client">
        <Formik
          initialValues={{
            nombre: "",
            descripcion: "",
            precio: "",
            stock: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              const response = await createProductoRequest(values);
              console.log(response);
              actions.resetForm();
            } catch (error) {
              console.error(error);
            }
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
                descripcion
              </label>
              <input
                type="text"
                name="descripcion"
                onChange={handleChange}
                value={values.descripcion}
                required="true"
                className="input"
              />

              <label htmlFor="" className="leabel">
                precio
              </label>
              <input
                type="number"
                name="precio"
                onChange={handleChange}
                value={values.precio}
                required="true"
                className="input"
              />

              <label htmlFor="" className="leabel">
                stock
              </label>
              <input
                type="number"
                name="stock"
                onChange={handleChange}
                value={values.stock}
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

export default ProductForm;
