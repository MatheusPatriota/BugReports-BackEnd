import * as Utils from "../utils/Utils";

const RoomScheme = new Utils.Schema({
  roomName: { type: String, required: true },
  enterpriseName: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: true },
  created: { type: Date, default: Date.now },
  closedAt: { type: Date, required: false },
});

module.exports = Utils.mongoose.model("Room", RoomScheme);
