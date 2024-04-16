const Product = require("../models/Products");

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
    const productId = req.params.id;
    // Verificar si el producto pertenece al usuario
    const product = await Product.findOne({ _id: productId });
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
    const productId = req.params.id;
    // Eliminar el producto por su ID
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
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


module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
