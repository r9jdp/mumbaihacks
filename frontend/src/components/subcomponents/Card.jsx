import React, { useState, useEffect, useRef } from "react";

// Card component definition
const Card = ({ dataImage, header, content }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = useState(null);

  // Update dimensions of the card on mount
  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  // Calculate mouse position ratios
  const mousePX = mousePosition.mouseX / dimensions.width;
  const mousePY = mousePosition.mouseY / dimensions.height;

  // Card transform styles
  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgStyle = {
    transform: `translate(${mousePX * -40}px, ${mousePY * -40}px)`,
    backgroundImage: `url(${dataImage})`,
    backgroundSize: "contain", // Change to 'contain' to fit the image within the card
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent repeating the image
  };

  // Event handlers
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      mouseX: e.clientX - rect.left - dimensions.width / 2,
      mouseY: e.clientY - rect.top - dimensions.height / 2,
    });
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveTimeout);
  };

  const handleMouseLeave = () => {
    setMouseLeaveTimeout(
      setTimeout(() => {
        setMousePosition({ mouseX: 0, mouseY: 0 });
      }, 1000)
    );
  };

  return (
    <div className="m-4 perspective cursor-pointer">
      <div
        className="relative w-48 h-36 bg-gray-800 overflow-hidden rounded-lg shadow-lg transition-transform duration-700" // Adjusted width and height
        style={cardStyle}
      >
        <div></div>
        <div className="absolute bottom-0 w-full p-5 text-white ">
          <h1 className="font-serif text-xl font-bold shadow-lg">{header}</h1>{" "}
          {/* Reduced font size */}
          <p className="opacity-100">{content}</p>
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const cardData = [
    {
      image: "/Assets/ic_glass_users.png",
      header: "Net worth",
      content: "1.35m",
    },
    {
      image: "/Assets/ic_glass_buy.png",
      header: "Assets",
      content: "40k",
    },
    {
      image: "/Assets/ic_glass_bag.png",
      header: "Liabilities",
      content: "50k",
    },
    {
      image: "/Assets/ic_glass_message.png",
      header: "Income",
      content: "1.5m",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white p-5 h-75% rounded-xl">
      <h1 className="text-5xl font-bold mb-10 ml-11 text-brown-800 w-full">
        Hi, Welcome Back
      </h1>
      <div className="flex flex-wrap justify-start w-full">
        {cardData.map((item, index) => (
          <Card
            key={index}
            dataImage={item.image}
            header={item.header}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
