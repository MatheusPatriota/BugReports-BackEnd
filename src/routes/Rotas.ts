const express = require("express");
const router = express.Router();
const roomController = require('../controller/RoomController')

router.get("/", (request, response) => {
  response.send("bem vindo a nossa API");
});

// rooms routes
router.post("/room", roomController.createRoom);
router.put("/room/:id", roomController.updateRoom);
router.get("/room/:id", roomController.getRoom);
router.delete("/room/:id", roomController.deleteRoom);

router.get("/rooms", roomController.getAllRooms);

module.exports = router;
