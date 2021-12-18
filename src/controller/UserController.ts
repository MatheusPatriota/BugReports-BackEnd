const UserModel = require("../model/User");

class UserController {
  async createUser(request, response) {
    const room = new UserModel(request.body);
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
    await UserModel.findByIdAndUpdate({ _id: request.params.id }, request.body)
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
    await UserModel.find()
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
    await UserModel.findById({ _id: request.params.id })
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
  async deleteUser(request, response) {
    await UserModel.deleteOne({ _id: request.params.id })
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
