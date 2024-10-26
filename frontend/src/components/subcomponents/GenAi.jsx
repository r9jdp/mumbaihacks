import React, { useState } from "react";

const CardComponent = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Track the expanded card index

  const cards = [
    {
      id: 1,
      name: "Dan Jordan",
      status: "At work",
      message: "Hey Dude, how it's going? I need your help in something...",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l1.jpeg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      status: "Busy",
      message: "Can we reschedule our meeting?",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l2.jpeg",
    },
    {
      id: 3,
      name: "John Doe",
      status: "Available",
      message: "Let's catch up soon!",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l3.jpeg",
    },
    {
      id: 4,
      name: "Kate Johnson",
      status: "Offline",
      message: "I will respond later.",
      image:
        "https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/l4.jpeg",
    },
  ];

  const handleCardRight = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setExpandedCardIndex(null); // Reset expanded index when navigating
  };

  const handleCardLeft = () => {
    setActiveCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setExpandedCardIndex(null); // Reset expanded index when navigating
  };

  const toggleExpand = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index); // Toggle the expanded state
  };

  return (
    <div
      className="border border-red-800 relative w-full my-5 mx-auto flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/mhmoodlan/Spread-Messenger/master/assets/img/bg-1.jpg')",
      }}
    >
      <div className="flex items-center justify-between w-96 m-10 border border-red-800 p-10">
        <button
          onClick={handleCardLeft}
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#cfd8dc"
            viewBox="0 0 24 24"
          >
            <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z" />
          </svg>
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeCardIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`min-w-full p-4 rounded-lg shadow-md flex flex-col items-center mb-4 cursor-pointer transition-all duration-300 ease-in-out border-2 border-gray-300 ${
                  expandedCardIndex === index
                    ? "w-[90%] h-[700px]"
                    : "w-[100%] h-[100px]"
                }`} // Expanded to 90% width and 700px height
                onClick={() => toggleExpand(index)} // Pass index to toggleExpand
              >
                <h2 className="font-semibold text-lg">{card.name}</h2>
                {expandedCardIndex === index && (
                  <div className="mt-2 flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full mb-2"
                      src={card.image}
                      alt={card.name}
                    />{" "}
                    {/* Slightly larger image */}
                    <div className="text-xs">{`Status: ${card.status}`}</div>
                    <div className="mt-2 text-xs">{`Missed messages: 100`}</div>
                    <div className="text-xs">{card.message}</div>
                    <div className="text-xs mt-2">{`Last seen at 2:00 am`}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleCardRight}
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#cfd8dc"
            viewBox="0 0 24 24"
          >
            <path d="M8.578 7.922l1.406-1.406 6 6-6 6-1.406-1.406 4.594-4.594z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
