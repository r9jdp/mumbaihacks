import React, { useState } from "react";

const CardComponent = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Track the expanded card index

  const cards = [
    {
      id: 1,
      name: "stocks", 
      message: "Allocate 10% to large-cap stocks like Infosys and HCL Technologies...",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l1.jpeg",
    },
    {
      id: 2,
      name: "bonds",
      message: "Invest in high-quality, short-term bonds with low credit risk to maintain liquidity and generate stable returns",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l2.jpeg",
    },
    {
      id: 3,
      name: "cryptocurrencies",  
      message: "Not recommended due to high market volatility and regulatory...",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l3.jpeg",
    },
    {
      id: 4,
      name: "mutual funds",
      message: "Invest in a mix of multicap and sector-specific mutual funds to benefit from diversified portfolios",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l4.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 m-5 ml-12">
      {cards.map((card) => {
        return (
          <div key={card.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={card.image}
                alt={card.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.message}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="Card 1" description="This is the first card." />
      <Card title="Card 2" description="This is the second card." />
      <Card title="Card 3" description="This is the third card." />
    </div> */
}
