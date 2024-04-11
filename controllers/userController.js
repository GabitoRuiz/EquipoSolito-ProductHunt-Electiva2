const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    // Busca el usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
    // Realizar la autenticación del usuario
    const userId = "ID_DEL_USUARIO"; // Obtén el ID del usuario de la base de datos

    // Generar el token de autenticación
    const token = jwt.sign({ userId }, "secreto", { expiresIn: "1h" });

    // Enviar el token como respuesta
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { signup, login };
