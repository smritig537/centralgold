import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2a52be] text-white pt-8 pb-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-base font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Central Gold specializes in purchasing gold items, offering fair prices, expert valuations, and secure transactions to provide a seamless and trustworthy selling experience for our customers.
          </p>
        </div>
        <div>
          <h2 className="text-white text-base font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Gold Rate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-base font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
          <Link
              to="#"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-base font-semibold mb-4">Contact Us</h2>
          <p>Cannuaght PLace, India</p>
          <p>Delhi 110001</p>
          <p>Email: centralgold@gmail.com</p>
          <p>Phone: 9000090887</p>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm pt-8">
        © 2024 Central Gold. All rights reserved.
      </p>
    </footer>
  );
}