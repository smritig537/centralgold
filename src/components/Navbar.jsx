import { Link } from "react-router-dom";
import Logo from "../assets/gold logo.png"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-24 text-sm font-semibold  bg-[#2a52be] h-14 text-white">
      <div className="flex gap-6">
        <span className="hover:underline">
          <Link to="/">Home</Link>
        </span>
        <span className="hover:underline">
          <Link to="/about">About the Company</Link>
        </span>
        
      </div>
      <div>
        <img src={Logo} alt="logo" className="w-auto h-14" />
      </div>
      <div className="flex gap-6">
        <Link to="/blog"><span className="hover:underline">Blog</span></Link>
        <Link to="/contactUs" ><span className="hover:underline">Contact Us</span></Link>
        <Link to="/enquiry"><span className="hover:underline">Enquiry Now</span></Link>
      </div>
    </nav>
  );
};
