const protectAdmin = (req, res, next) => {
  const username = req.headers["x-admin-username"];
  const password = req.headers["x-admin-password"];

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  return next();
};

export { protectAdmin };
