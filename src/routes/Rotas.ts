const express = require("express");
const router = express.Router();
const roomController = require("../controller/RoomController");
const userController = require("../controller/UserController");
const reportController = require("../controller/ReportController");
const UserValidation = require("../middlewares/UserValidation");
const RoomValidation = require("../middlewares/RoomValidation");
const ReportValidation = require("../middlewares/ReportValidation");

router.get("/", (request, response) => {
  response.send("bem vindo a nossa API");
});

// rooms routes
router.post("/room", RoomValidation, roomController.createRoom);
router.put("/room/:id", RoomValidation, roomController.updateRoom);
router.get("/room/:id", roomController.getRoom);
router.delete("/room/:id", roomController.deleteRoom);

router.get("/rooms", roomController.getAllRooms);

//user routes
router.post("/user", UserValidation, userController.createUser);
router.put("/user/:id", UserValidation, userController.updateUser);
router.get("/user/:id", userController.getUser);
router.delete("/user/:id", userController.deleteUser);

router.get("/users", userController.getAllUsers);

//report routes

router.post("/report", ReportValidation, reportController.createReport);
router.put("/report/:id", ReportValidation, reportController.updateReport);
router.get("/report/:id", reportController.getReport);
router.delete("/report/:id", reportController.deleteReport);

router.get("/reports", reportController.getAllReports);

module.exports = router;
