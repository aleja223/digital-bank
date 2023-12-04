const { Usuario } = require("../../db").conn.models;

const getUsers = async () => {
  try {
    return await Usuario.findAll();
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener usuarios");
  }
};

const createUser = async (userData) => {
  const { nombre, fechaNacimiento, sexo } = userData;

  try {
    return await Usuario.create({
      nombre,
      fechaNacimiento,
      sexo,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error al crear usuario");
  }
};

const updateUser = async (userId, userData) => {
  const { nombre, fechaNacimiento, sexo } = userData;

  try {
    const userToUpdate = await Usuario.findByPk(userId);

    if (!userToUpdate) {
      throw new Error("Usuario no encontrado");
    }

    userToUpdate.nombre = nombre || userToUpdate.nombre;
    userToUpdate.fechaNacimiento =
      fechaNacimiento || userToUpdate.fechaNacimiento;
    userToUpdate.sexo = sexo || userToUpdate.sexo;

    await userToUpdate.save();

    return userToUpdate;
  } catch (error) {
    console.error(error);
    throw new Error("Error al actualizar usuario");
  }
};

const deleteUser = async (userId) => {
  try {
    const userToDelete = await Usuario.findByPk(userId);

    if (!userToDelete) {
      throw new Error("Usuario no encontrado");
    }

    await userToDelete.destroy();

    return { message: "Usuario eliminado exitosamente" };
  } catch (error) {
    console.error(error);
    throw new Error("Error al eliminar usuario");
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
