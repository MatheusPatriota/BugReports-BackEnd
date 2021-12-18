const express = require("express");
const router = express.Router();
const roomController = require("../controller/RoomController");
const userController = require("../controller/UserController");

router.get("/", (request, response) => {
  response.send("bem vindo a nossa API");
});

// rooms routes
router.post("/room", roomController.createRoom);
router.put("/room/:id", roomController.updateRoom);
router.get("/room/:id", roomController.getRoom);
router.delete("/room/:id", roomController.deleteRoom);

router.get("/rooms", roomController.getAllRooms);

//user routes
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.get("/user/:id", userController.getUser);
router.delete("/user/:id", userController.deleteUser);

router.get("/user", userController.getAllUsers);

module.exports = router;
