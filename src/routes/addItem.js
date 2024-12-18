const db = require('../persistence');
const uuid = require('uuid/v4');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        position: req.body.position,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
