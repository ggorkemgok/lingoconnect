import React from "react";
import instagram from "../assets/instagram.svg";
import { Link } from "react-scroll";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#458567] mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              LingoConnect
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.instagram.com/lingoconnect2023/"
                >
                  <i className="fab fa-facebook-square text-sm leading-lg text-white opacity-75"></i>
                  <span className="ml-2">
                    <img
                      src={instagram}
                      alt="instagram svg"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </span>
                </a>
              </li>
              <li className="nav-item cursor-pointer">
                <Link activeClass="active" to="contactSection" spy={true} smooth={true} duration={500}>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Contact</span>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
