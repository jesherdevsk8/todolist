const db = require('../persistence');

module.exports = async (req, res) => {
    console.log(req.body);
    // TODO: rever esse update
    await db.updateItemPosition(req.params.id, {
        position: req.body.itemOverNewPosition,
    });

    await db.updateItemPosition(req.body.itemOverId, {
        position: req.body.draggedItemNewPosition,
    });
    const item = await db.getItem(req.params.id);
    res.send(item);
};
