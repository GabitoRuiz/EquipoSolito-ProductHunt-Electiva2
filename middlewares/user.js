function validateSignupData(req, res, next) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    // Puedes agregar más validaciones aquí si lo deseas
    next();
}

module.exports = { validateSignupData };