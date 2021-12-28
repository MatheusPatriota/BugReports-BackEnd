import * as Utils from "../utils/Utils";

class UserController {
  async createUser(request, response) {
    const room = new Utils.UserModel(request.body);
    await room
      .save()
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Usuário criado com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao criar Usuário", error });
      });
  }

  async updateUser(request, response) {
    await Utils.UserModel.findByIdAndUpdate(
      { _id: request.params.id },
      request.body
    )
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Usuário atualizado com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao atualizar Usuário", error });
      });
  }

  async getAllUsers(request, response) {
    await Utils.UserModel.find()
      .sort("created")
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Usuários exibidos com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao exibir Usuários", error });
      });
  }
  async getUser(request, response) {
    await Utils.UserModel.findById({ _id: request.params.id })
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Usuários exibida com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao exibir Usuário", error });
      });
  }

  async getUserByEmail(request, response) {
    await Utils.UserModel.findOne({ email: request.params.email })
      .then((res) => {
        if (res == null) {
          return response
            .status(404)
            .json("Usuário não encontrado na nossa base de dados");
        }
        return response
          .status(200)
          .json({ msg: "Usuários exibida com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao exibir Usuário", error });
      });
  }

  async deleteUser(request, response) {
    await Utils.UserModel.deleteOne({ _id: request.params.id })
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Usuários deletados com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao deletar Usuário", error });
      });
  }
}

module.exports = new UserController();
