import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    {
      username,
      role: "admin",
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({ token, username });
});

export { loginAdmin };
