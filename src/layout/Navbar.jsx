import { Link } from "react-router-dom";
import logo from "../assets/GraphQL_Logo.svg";

const Navbar = () => {
  return (
    <header className="py-3 px-10px md:px-50px">
      <nav className="flex justify-between items-center">
        <div className="w-50px">
          <Link to={"/"}>
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <h4>GraphQL & Hygraph CMS</h4>
      </nav>
    </header>
  );
};

export default Navbar;
