// pages/user/UserPage.js
import React, { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";
import UserList from "../../components/UserList";
import UserEditForm from "../../components/UserEditForm";
import "../app/styles.css";
import api from "../../src/services/api";

const UserPage = () => {
  console.log("Rendering UserPage");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
    setIsEditing(false);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {}
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users");
        const fetchedUsers = response.data;

        setUsers(fetchedUsers);
      } catch (error) {
        setUsers([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      {isEditing ? (
        <div>
          <p>Rendering UserEditForm</p>
          <UserEditForm user={editingUser} onSubmit={handleEditUser} />
        </div>
      ) : (
        <UserForm onSubmit={handleAddUser} />
      )}
      <UserList
        users={currentUsers}
        onEdit={(user) => {
          console.log("Edit button clicked. Editing user:", user);
          setIsEditing(true);
          setEditingUser(user);
        }}
        onDelete={handleDeleteUser}
      />
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default UserPage;
