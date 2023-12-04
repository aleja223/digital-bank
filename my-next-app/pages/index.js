// pages/index.js
import React from "react";
import UserList from "../components/UserList";
import api from "../src/services/api";

const ConsultaIndex = ({ users }) => {
  return (
    <div>
      <h1>User Consultation</h1>
      <UserList users={users} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await api.get("/");
    const users = response.data;

    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    return {
      props: { users: [] },
    };
  }
}

export default ConsultaIndex;
