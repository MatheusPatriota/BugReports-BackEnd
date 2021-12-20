import * as Utils from "../utils/Utils";

const RoomValidation = async (req, res, next) => {
  const { roomName, enterpriseName, password } = req.body;
  let exists;

  if (!roomName) return res.status(400).json({ error: "Nome é obrigatório" });
  else if (!enterpriseName)
    return res.status(400).json({ error: "Email é obrigatório" });
  else if (!password)
    return res.status(400).json({ error: "Password é obrigatório" });
  next();
};

module.exports = RoomValidation;
