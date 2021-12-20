import * as Utils from "../utils/Utils";

const ReportValidation = async (req, res, next) => {
  const { title, authorId, description } = req.body;

  if (!title) return res.status(400).json({ error: "Titulo é obrigatório" });
  else if (!authorId)
    return res.status(400).json({ error: "Id do Autor é obrigatório" });
  else if (!description) {
    return res.status(400).json({ error: "Descrição do Report é obrigatório" });
  }
  next();
};

module.exports = ReportValidation;
