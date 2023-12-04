// components/UserList.js
import React from "react";
import "../app/styles.css";

const UserList = ({ users, onEdit, onDelete }) => {
  const handleEditClick = (user) => {
    onEdit && onEdit(user);
  };

  const handleDeleteClick = (user) => {
    const confirmDelete = window.confirm(
      `¿Seguro que deseas eliminar a ${user.nombre}?`
    );
    if (confirmDelete) {
      onDelete && onDelete(user.id);
    }
  };

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list-item">
          <div className="user-info">
            <span>{user.nombre}</span>
            <span>{user.fechaNacimiento}</span>
            <span>{user.sexo}</span>
          </div>
          <div className="user-actions">
            <button onClick={() => handleEditClick(user)}>Editar</button>
            <button
              className="delete"
              onClick={() => handleDeleteClick(user.id)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
