import { Link } from "react-router-dom";
import logo from "../assets/GraphQL_Logo.svg";

const Navbar = () => {
  return (
    <header className="py-3 px-50px">
      <nav className="flex justify-between items-center">
        <div className="w-50px">
          <Link to={"/"}>
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>

        <h3>I love Graphql</h3>
      </nav>
    </header>
  );
};

export default Navbar;
