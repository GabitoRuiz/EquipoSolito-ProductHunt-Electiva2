const Product = require("../models/Products");
const Product = require("../models/Comments");

async function createProduct(req, res) {
  try {
    const { name, description, url, tags } = req.body;
    const userId = req.user._id;
    const newProduct = new Product({ name, description, url, tags, userId });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const userId = req.user.userId;
    const productId = req.params.id;
    // Verificar si el producto pertenece al usuario
    const product = await Product.findOne({ _id: productId, userId });
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    // Actualizar el producto
    const { name, description, tags } = req.body;
    product.name = name;
    product.description = description;
    product.tags = tags;
    /* actualizar otros campos si es necesario */
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const userId = req.user.userId;
    const productId = req.params.id;
    // Verificar si el producto pertenece al usuario
    const product = await Product.findOne({ _id: productId, userId });
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    // Eliminar el producto
    await product.remove();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function searchProducts(req, res) {
  try {
    // Parámetros de búsqueda
    const { category, name, tags } = req.query;

    // Filtros de búsqueda
    const filters = {};
    if (category) filters.category = category;
    if (name) filters.name = { $regex: name, $options: "i" };
    if (tags) filters.tags = { $all: tags.split(",") };
    // Realizar la búsqueda de productos
    const products = await Product.find(filters);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function rateProduct(req, res) {
  try {
    const userId = req.user.userId;
    const productId = req.params.id;
    const { content } = req.body;

    // Verificar si el usuario ya ha calificado este producto
    const existingReview = await Review.findOne({ userId, productId });
    if (existingReview) {
      return res
        .status(400)
        .json({ error: "El usuario ya ha calificado este producto" });
    }
    // Crear una nueva reseña
    const newReview = new Review({
      userId,
      productId,
      content,
    });
    // Guardar la nueva reseña en la base de datos
    await newReview.save();

    res.status(201).json({ message: "Producto calificado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  rateProduct,
};
