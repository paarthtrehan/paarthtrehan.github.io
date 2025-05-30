import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="text-xl font-bold">DemoLogo</div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar;
