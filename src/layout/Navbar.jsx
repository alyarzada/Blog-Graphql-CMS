import logo from "../assets/GraphQL_Logo.svg";

const Navbar = () => {
  return (
    <header className="py-3 px-50px shadow-lg shadow-pink-500/50">
      <nav className="flex justify-between items-center">
        <div className="w-50px">
          <img className="w-full" src={logo} alt="" />
        </div>

        <h3>I love Graphql</h3>
      </nav>
    </header>
  );
};

export default Navbar;
