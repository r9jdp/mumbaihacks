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
    <div
      className="m-4 perspective cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="relative w-48 h-36 bg-gray-800 overflow-hidden rounded-lg shadow-lg transition-transform duration-700" // Adjusted width and height
        style={cardStyle}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500`}
          style={{
            ...cardBgStyle,
            opacity: mousePosition.mouseX || mousePosition.mouseY ? 0.5 : 0.3,
          }}
        ></div>
        <div className="absolute bottom-0 w-full p-5 text-white transform translate-y-16 transition-transform duration-500 hover:translate-y-0">
          <h1 className="font-serif text-xl font-bold shadow-lg">{header}</h1>{" "}
          {/* Reduced font size */}
          <p className="opacity-0 transition-opacity duration-500 hover:opacity-100">
            {content}
          </p>
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
      header: "Canyons",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: "/Assets/ic_glass_buy.png",
      header: "Beaches",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: "/Assets/ic_glass_bag.png",
      header: "Trees",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: "/Assets/ic_glass_message.png",
      header: "Lakes",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white p-5 h-75%">
      <h1 className="text-3xl font-bold mb-10 text-brown-800 text-center">
        Hi, Welcome Back
      </h1>
      <div className="flex flex-wrap justify-center">
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
