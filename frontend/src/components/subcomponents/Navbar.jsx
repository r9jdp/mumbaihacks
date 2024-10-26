import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-700 relative">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="text-white text-2xl">Navbar Title</div>

        <div className="flex items-center relative group">
          <img
            src="https://via.placeholder.com/40" // Replace with your image URL
            alt="Profile"
            className="rounded-full w-10 h-10 ml-2"
          />
          {/* Sign Out Button */}
          <div className="absolute left-0 transform translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white rounded px-3 py-1">
            <button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: `${window.location.origin}`,
                  },
                })
              }
            >
              Sign Out
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
