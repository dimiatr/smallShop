import { NavLink } from "react-router-dom";

function NavLinksMenu({ to, children }) {
  const baseClass =
    "anim block rounded-lg px-3 py-2 text-base text-gray-700 hover:bg-gray-100";

  return (
    <NavLink
      className={({ isActive }) =>
        `${baseClass} ${isActive && "font-semibold text-sky-600"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavLinksMenu;
