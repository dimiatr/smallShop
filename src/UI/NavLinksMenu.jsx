import { NavLink } from "react-router-dom";

function NavLinksMenu({ to, children }) {
  const baseClass = "text-lg text-gray-700";

  return (
    <NavLink
      className={({ isActive }) =>
        `${baseClass} ${isActive && "font-semibold"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavLinksMenu;
