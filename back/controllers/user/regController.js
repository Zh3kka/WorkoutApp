import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../../helpers/generateToken.js";

//*         @desc    Register user        *//
//*         @route   POST /api/users     *//
//*         @access  Public               *//

export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Ищем пользвателя по email
  const isHaveUser = await User.findOne({ email });

  // Проверка на существующего пользователя
  if (isHaveUser) {
    res.status(400);
    throw new Error("Пользователь уже зарегистрирован");
  }

  // Создается новый пользователь
  const user = await User.create({
    email,
    password,
  });

  const token = generateToken(user._id);

  res.json({ user, token });
});
