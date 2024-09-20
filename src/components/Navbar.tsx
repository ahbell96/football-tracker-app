import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    // <nav className="bg-blue-500 p-4">
    //   <ul className="flex space-x-4">
    //     <li>
    //       <Link to="/" className="text-white">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/teams" className="text-white">
    //         Teams
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/match/:id" className="text-white">
    //         Match
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
