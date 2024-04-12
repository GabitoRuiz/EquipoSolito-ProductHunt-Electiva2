const Review = require("../models/Comments");

async function createReview(req, res) {
  try {
    const userId = req.user.userId;
    const productId = req.params.id;
    const { content } = req.body;

    // Crear una nueva reseña
    const newReview = new Review({
      userId,
      productId,
      content,
    });

    // Guardar la nueva reseña en la base de datos
    await newReview.save();

    res.status(201).json({ message: "Reseña creada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = { createReview };
