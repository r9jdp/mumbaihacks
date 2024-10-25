const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function userInDatabase(username, plainPassword) {
  try {
    const user = await prisma.users.findUnique({
      where: { username: username },
    });

    if (user && (await bcrypt.compare(plainPassword, user.password))) {
      return { loginstatus: true };
    } else {
      return { loginstatus: false };
    }
  } catch (error) {
    console.error("Error checking user in database:", error);
    throw new Error("Database error");
  }
}

exports.getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await userInDatabase(username, password);
    res.status(result.loginstatus ? 200 : 401).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
