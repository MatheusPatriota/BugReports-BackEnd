const RoomModel = require("../model/Room");

class RoomController {
  async createRoom(request, response) {
    const room = new RoomModel(request.body);
    await room
      .save()
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Sala criada com sucesso!", res });
      })
      .catch((error) => {
        return response.status(500).json({ msg: "Error ao criar Sala", error });
      });
  }

  async updateRoom(request, response) {
    await RoomModel.findByIdAndUpdate({ _id: request.params.id }, request.body)
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Sala atualizada com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao atualizar Sala", error });
      });
  }

  async getAllRooms(request, response) {
    await RoomModel.find()
      .sort("created")
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Salas exibidas com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao exibir Salas", error });
      });
  }
  async getRoom(request, response) {
    await RoomModel.findById({ _id: request.params.id })
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Salas exibida com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao exibir Sala", error });
      });
  }
  async deleteRoom(request, response) {
    await RoomModel.deleteOne({ _id: request.params.id })
      .then((res) => {
        return response
          .status(200)
          .json({ msg: "Salas deletada com sucesso!", res });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ msg: "Error ao deletar Sala", error });
      });
  }
}

module.exports = new RoomController();
export default RoomController;