function validateProductData(req, res, next) {
    const { description, url } = req.body;
    if ( !description || !url) {
        return res.status(400).json({ error: 'Faltan algun campo obligatorio' });
    }
    next();
}

module.exports = { validateProductData };