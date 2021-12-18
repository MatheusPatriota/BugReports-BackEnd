import * as Utils from '../utils/utils';

const UserScheme = new Utils.Schema({
    name: {type: String, required: true},
    admin: {type: Boolean, required: true},
    avatar: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png'},
    password: {type: String, required: true},
    active: {type: Boolean, default: true},
    created:{type: Date, default: Date.now},
});

module.exports = mongoose.model('User', UserScheme);