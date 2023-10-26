import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usuarios } from "../data/users.data.js";
import "../styles/loginForm.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [] = usuarios;

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/client");
  });

  return (
    <div className="page-login-form">
      <form onSubmit={onSubmit} className="login-form">
        <img src="../../public/logo.png" className="logo" />
        <label htmlFor="">Nombre de usuario</label>
        <input
          type="text"
          {...register("usuario", {
            required: {
              value: true,
              message: "usuario no encontrado",
            },
            validate: (value) => value == "root" || "usuario no encontrado",
          })}
        />
        {errors.usuario && <span>{errors.usuario.message}</span>}

        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          {...register("contraseña", {
            required: {
              value: true,
              message: "contraseña incorrecta",
            },
            validate: (value) => value == "root" || "contraseña incorrecta",
          })}
        />
        {errors.contraseña && <span>{errors.contraseña.message}</span>}
        <button type="submit">validar</button>
      </form>
    </div>
  );
}

export default LoginForm;