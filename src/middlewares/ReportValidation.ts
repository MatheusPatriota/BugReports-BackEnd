import * as Utils from "../utils/Utils";

const ReportValidation = async (req, res, next) => {
  const { title, author, authorEmail, description } = req.body;

  if (!title) return res.status(400).json({ error: "Titulo é obrigatório" });
  else if (!author)
    return res.status(400).json({ error: "Nome do Autor é obrigatório" });
  else if (!authorEmail)
    return res.status(400).json({ error: "Email do Autor é obrigatório" });
  else if(!description){
    return res.status(400).json({ error: "Descrição do Report é obrigatório" });
  }
  next();
};

module.exports = ReportValidation;
