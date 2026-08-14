import { Link } from "react-router-dom";
import { categories } from "../data/data";

function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;

  return (
    <footer className="bg-gray-100 px-4 py-10 xs:px-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-blue-900 px-6 py-12 text-center text-white shadow-lg">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Готовы начать покупки?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:text-base">
            Надёжный интернет-магазин с товарами на любой вкус — от
            электроники до товаров для активного отдыха.
          </p>
          <Link
            to="/"
            className="anim mt-6 inline-block rounded-full bg-white px-6 py-2.5 font-medium text-slate-900 hover:bg-gray-100"
          >
            Перейти в каталог
          </Link>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md sm:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3">
              <Link to="/">
                <img className="h-6" src={logoSrc} alt="логотип магазина" />
              </Link>
              <p className="text-sm text-gray-600">
                Качественные товары, честные цены и быстрая доставка — ваш
                надёжный интернет-магазин.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Категории</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.id}`}
                      className="anim hover:text-sky-600"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Покупателям</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-gray-600">
                <li>
                  <Link to="/about" className="anim hover:text-sky-600">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="anim hover:text-sky-600">
                    Корзина
                  </Link>
                </li>
                <li>
                  <Link to="/favorite" className="anim hover:text-sky-600">
                    Избранное
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Контакты</h3>
              <p className="text-sm text-gray-600">
                Email: support@yourstore.ru
              </p>
              <p className="text-sm text-gray-600">
                Телефон: +7 900 123-45-67
              </p>
              <p className="text-sm text-gray-600">
                Адрес: г. Москва, ул. Торговая, 1
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <p className="text-center text-sm text-gray-500 sm:text-left">
            &copy; 2026 Интернет-магазин. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
