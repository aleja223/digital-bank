// components/UserEditForm.js
import React, { useState, useEffect } from "react";

const UserEditForm = ({ user, onSubmit }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(editedUser);
  };

  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <label>
        Name:
        <input
          type="text"
          name="nombre"
          value={editedUser.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          name="fechaNacimiento"
          value={editedUser.fechaNacimiento}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select name="sexo" value={editedUser.sexo} onChange={handleChange}>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UserEditForm;
