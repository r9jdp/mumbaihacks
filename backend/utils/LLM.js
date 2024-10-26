const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: "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",
});

async function aiGenerator(data) {
  // console.log("Data passed to AI :\n", data);

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          'You have to act as an investment advisor for indian stock market. Even if you can\'t give tips dont explicitly state it. You get a json from user that contains following info:\nHis possible assets that can be from -\nmoney_in_account_details, stocks, bonds, mutual_funds, real_estate, jewellery, crypto, automobiles.\n\nHis possible liabilities can be from - home_loan, car_loan, student_loan, personal_loan, payable_bills, credit_card_debt\n\nHis future goals would be based on - \n1. Risk tolerance {conservative / moderate / aggresive}\n2. Financial Goals {Growth / income / Balanced}\n3. Investment Preferences {Stocks / Bonds / Cryptocurencies / Mutual Funds / Real Estate}\n4. Investment Time Horizon {Short-term (1-3 years) / Medium-term (3-7 years) / Long-term (7+ years)}\n5. Preferred Sectors {Technology / Healthcare / Energy / Finance / Consumer Goods}\n6. Amount to Invest\nAnalyse it and recommend where should he invest. Give company names whereever required.\nGive output in the following JSON format and do not include anything or sentence other than json\n{\n    "brief" : "",\n    "stocks" : "",\n    "which_and_why_stocks": "",\n    "bonds" : "",\n    "which_and_why_bonds": "",\n    "cryptocurrencies" : "",\n    "which_and_why_cryptos": "",\n    "mutual funds" : "",\n    "which_and_why_mf": "",\n    "real estate" : "",\n    "which_and_why_realEstate": ""\n}\nGive \\n whereever next line is there so it can be directly printed',
      },
      {
        role: "user",
        content: JSON.stringify(data),
      },
    ],
    model: "llama-3.2-90b-text-preview",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  });

  let responseData = ""; // Initialize an empty string to accumulate response

  for await (const chunk of chatCompletion) {
    responseData += chunk.choices[0]?.delta?.content || ""; // Accumulate chunks
  }

  return responseData.trim(); // Return the accumulated response
}

module.exports = {
  aiGenerator,
};

// aiGenerator("trial data");
