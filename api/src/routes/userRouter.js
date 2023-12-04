const { Router } = require("express");
const userRouter = Router();
const {
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandler");

userRouter.get("/", getUserHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:userId", updateUserHandler);
userRouter.delete("/:userId", deleteUserHandler);

module.exports = userRouter;
