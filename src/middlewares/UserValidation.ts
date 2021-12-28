import * as Utils from "../utils/Utils";

const ValidacaoTarefa = async (req, res, next) => {
  const { name, email, admin, password } = req.body;
  let exists;

  if (!name) return res.status(400).json({ error: "Nome é obrigatório" });
  else if (!email)
    return res.status(400).json({ error: "Email é obrigatório" });
  else if (admin == null)
    return res.status(400).json({ error: "Status Admin é obrigatório" });
  else if (!password)
    return res.status(400).json({ error: "Password é obrigatório" });
  else {
    exists = await Utils.UserModel.findOne({
      email: { $eq: email },
    });
  }

  if (exists) {
    return res.status(400).json({
      error: "Já existe um usuário cadastrado com esse email",
    });
  }
  next();
};

module.exports = ValidacaoTarefa;
