function convertData(originalData) {
  // Check if originalData and data are defined
  if (!originalData || !originalData.data) {
    throw new Error("Invalid data format");
  }

  const { assets, liabilities, futuregoals } = originalData.data;

  // Ensure that assets, liabilities, and futuregoals are present
  if (!assets || !liabilities || !futuregoals) {
    throw new Error("Missing assets, liabilities, or future goals data");
  }

  return {
    assets: {
      money_in_account_details: assets[0]?.account_details || 0,
      stocks: {
        current_value: assets[0]?.stocks || 0,
        portfolio: ["Reliance", "TCS"], // Example portfolio
      },
      bonds: assets[0]?.bonds || 0,
      mutual_funds: assets[0]?.mutual_funds || 0,
      real_estate: assets[0]?.real_estate || 0,
      jewellery: assets[0]?.jewellery || 0,
      crypto: {
        current_value: assets[0]?.crypto || 0,
        portfolio: ["Bitcoin", "Ethereum"], // Example portfolio
      },
      automobiles: assets[0]?.automobiles || 0,
    },
    liabilities: {
      home_loan: liabilities[0]?.home_loan || 0,
      car_loan: liabilities[0]?.car_loan || 0,
      credit_card_debt: liabilities[0]?.credit_card_debt || 0,
    },
    goals: {
      risk_tolerance:
        futuregoals[0]?.risk_tolerance?.toLowerCase() || "unknown",
      financial_goals: futuregoals[0]?.financial_goals || "unknown", // Using actual value from future goals
      investment_preferences: [
        ...(futuregoals[0]?.investment_preferences || []),
        "Real Estate", // Example addition
      ],
      investment_time_horizon:
        futuregoals[0]?.investment_time_horizon || "unknown", // Use actual value
      preferred_sectors: ["Technology", "Healthcare", "Finance"], // Example values
      amount_to_invest:
        (parseFloat(futuregoals[0]?.initial_investment) || 0) +
        (parseFloat(futuregoals[0]?.regular_investment) || 0),
    },
  };
}

module.exports = {
  convertData,
};
