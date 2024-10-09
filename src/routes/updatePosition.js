const db = require('../persistence');

module.exports = async (req, res) => {
    try {
        // Atualiza a posição do item arrastado
        await db.updateItemPosition(req.params.id, {
            position: req.body.droppedOnItemPosition,
        });

        // Atualiza a posição do item sobre o qual o primeiro item foi solto
        await db.updateItemPosition(req.body.droppedOnItemId, {
            position: req.body.draggedItemPosition,
        });

        const item = await db.getItem(req.params.id);
        res.send(item);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating item position');
    }
};
