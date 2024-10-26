const { PrismaClient } = require("@prisma/client");
const { convertData } = require("../utils/dataFormatConverter");
const { aiGenerator } = require("../utils/LLM");
const prisma = new PrismaClient();

async function DataExtraction(req, res) {
  const { email } = req.body;
  try {
    const data = await prisma.users.findFirst({
      where: {
        email,
      },
      include: {
        assets: true,
        family_members: true,
        futuregoals: true,
        liabilities: true,
        other_assets: true,
        other_liabilities: true,
      },
    });

    res.status(data ? 200 : 401).json({
      status: !!data, // Use a boolean to indicate success or failure
      data: convertData({ data }) || null, // Return null if no data found
      Aidata: await aiGenerator(convertData({ data })),
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      status: false,
      error: "An error occurred while fetching data.", // Custom error message
    });
  } finally {
    await prisma.$disconnect(); // Ensure disconnection is called
  }
}

module.exports = {
  DataExtraction,
};
