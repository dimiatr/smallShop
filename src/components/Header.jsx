import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLinksMenu from "../UI/NavLinksMenu";
import { MyContext } from "./MyContext";

function Header() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;
  const { cart } = useContext(MyContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 xs:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 px-4 py-3 shadow-lg xs:px-6">
        <Link to={"/"}>
          <img className="h-7" src={logoSrc} alt="логотип магазина" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to={"/cart"}
            className="anim relative flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Открыть меню"
              className="anim flex size-10 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            </button>

            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setMenuOpen(false)}
                ></div>
                <ul
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-0 top-13 z-20 flex w-40 flex-col gap-1 rounded-xl bg-white p-2 shadow-xl"
                >
                  <li>
                    <NavLinksMenu to={"/"}>Главная</NavLinksMenu>
                  </li>
                  <li>
                    <NavLinksMenu to={"/about"}>О нас</NavLinksMenu>
                  </li>
                  <li>
                    <NavLinksMenu to={"/favorite"}>Избранное</NavLinksMenu>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
