// src/services/api.js
// Aquí debes implementar la lógica para conectarte a tu servicio REST API.
// Puedes usar bibliotecas como axios para hacer las solicitudes HTTP.

// Ejemplo básico con axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/users", // Reemplaza con la URL de tu API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
