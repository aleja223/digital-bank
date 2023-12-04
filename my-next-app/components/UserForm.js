// components/UserForm.js
import React, { useState } from "react";
import "../app/styles.css"; // Asegúrate de tener estilos CSS adecuados

const UserForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!nombre || !fechaNacimiento || !sexo) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Crear nuevo usuario
    const newUser = {
      nombre,
      fechaNacimiento,
      sexo,
    };

    // Enviar el nuevo usuario al componente principal
    onSubmit(newUser);

    // Limpiar el formulario

    setNombre("");
    setFechaNacimiento("");
    setSexo("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese su nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          placeholder="Seleccione su fecha de nacimiento"
        />
      </div>
      <div className="form-group">
        <label htmlFor="sexo">Sexo:</label>
        <select
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          placeholder="Seleccione su sexo">
          <option value="">Seleccione...</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default UserForm;
