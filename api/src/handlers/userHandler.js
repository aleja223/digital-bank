const userController = require("../controllers/userController");

const getUserHandler = async (req, res) => {
  try {
    const usuarios = await userController.getUsers();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener usuarios");
  }
};

const createUserHandler = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await userController.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;

  try {
    const updatedUser = await userController.updateUser(userId, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await userController.deleteUser(userId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
