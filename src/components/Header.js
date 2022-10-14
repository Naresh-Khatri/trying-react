import logoImg from "../assets/ca-logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <img className="w-12" alt="logo" src={logoImg} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="ml-3 text-xl">SANTOSH MISHRA & ASSOCIATES</span>
            <p className="ml-3 text-gray-500">CHARTERED ACCOUNTANTS</p>
          </div>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-10 hover:text-white" to="/">
            Home
          </Link>
          <Link className="mr-10 hover:text-white" to="/about">
            About
          </Link>
          <Link className="mr-10 hover:text-white" to="/services">
            Services
          </Link>
          <Link className="mr-10 hover:text-white" to="/team">
            Our Team
          </Link>
          <Link className="mr-10 hover:text-white" to="/branches">
            Branches
          </Link>
          {/* <Link className="mr-10 hover:text-white" to="/help">
            Help Desk
          </Link> */}
        </nav>
        <Link className="mr-10 hover:text-white" to="/contact">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
