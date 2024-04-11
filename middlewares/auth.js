const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token de autenticación no proporcionado' });

    jwt.verify(token, 'secreto', (err, user) => {
        if (err) return res.status(403).json({ error: 'Token de autenticación inválido' });
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken };

// const jwt = require('jsonwebtoken');

// function login(req, res) {
//     try {
//         // Realizar la autenticación del usuario
//         const userId = 'ID_DEL_USUARIO'; // Obtén el ID del usuario de la base de datos

//         // Generar el token de autenticación
//         const token = jwt.sign({ userId }, 'secreto', { expiresIn: '1h' });

//         // Enviar el token como respuesta
//         res.json({ token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// module.exports = { login };