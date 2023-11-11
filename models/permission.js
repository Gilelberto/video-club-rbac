const mongoose = require('mongoose');
//import adminAbilities from '../abilities/adminAbilities';

const formatEnum = ['READ', 'CREATE', 'UPDATE', 'DELETE'];

const schema = mongoose.Schema({
    _description:String,
    _type: {
        type:String,
        enum:formatEnum
    }
});

class Permission {
    constructor(description, type){
        this._description = description;
        this._type = type;
    }

    get description() { return this._description; } 
    set description(v) { this._description = v; }

    get type() { return this._type; }
    set type(v) { this._type = v; }
}

schema.loadClass(Permission);
module.exports = mongoose.model('Permission', schema);