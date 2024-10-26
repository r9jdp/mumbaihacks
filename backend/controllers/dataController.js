const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function userInDatabase(email) {
  try {
    const user = await prisma.users.findFirst({
      where: { email: email },
    });
    return user ? { user } : { user: false };
  } catch (error) {
    console.error("Error checking user in database:", error);
    throw new Error("Database error");
  }
}

exports.getUserData = async (req, res) => {
  const { email } = req.body;

  try {
    const result = await userInDatabase(email);
    res.status(result.user ? 200 : 401).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
