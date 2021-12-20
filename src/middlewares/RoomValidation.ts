import * as Utils from "../utils/Utils";

const RoomValidation = async (req, res, next) => {
  const { roomName, enterpriseName, password } = req.body;
  let exists;

  if (!roomName) return res.status(400).json({ error: "Nome é obrigatório" });
  else if (!enterpriseName)
    return res.status(400).json({ error: "Email é obrigatório" });
  else if (!password)
    return res.status(400).json({ error: "Password é obrigatório" });
  else {
    exists = await Utils.UserModel.findOne({
      roomName: { $eq: roomName },
    });
  }

  if (exists) {
    return res.status(400).json({
      error: "Já existe um sala de projeto cadastrado com esse nome",
    });
  }
  next();
};

module.exports = RoomValidation;
