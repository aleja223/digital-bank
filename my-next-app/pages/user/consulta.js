// pages/user/consulta.js
import React from "react";
import UserList from "../../components/UserList";
import api from "../../src/services/api";

const ConsultaUser = ({ users }) => {
  return (
    <div>
      <h1>User Consultation</h1>
      <UserList users={users} />
    </div>
  );
};

export default ConsultaUser;
