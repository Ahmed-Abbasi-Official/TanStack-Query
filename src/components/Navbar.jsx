import { NavLink } from "react-router-dom";

 const Navbar = () => {
  return (
    <header>
      <div>
        <NavLink to="/">AhmiiReactQuery</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rad">FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/rq"> FetchRQ </NavLink>
          </li>
          <li>
            <NavLink to="/infinite"> Infinite Scroll </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;