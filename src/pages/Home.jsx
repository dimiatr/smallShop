import { Link } from "react-router-dom";
import { categories } from "../data/data";

function Home() {

  return (
    <>
      <h1 className=" text-3xl font-semibold text-center mb-8">Категории</h1>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {categories.map((category) => (
          <li
            key={category.id}
            className="anim group overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg"
          >
            <Link
              to={`/category/${category.id}`}
              className="relative block aspect-[4/3] overflow-hidden"
            >
              <img
                src={category.img}
                alt={category.name}
                className="anim size-full object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"></div>
              <span className="absolute inset-x-0 bottom-0 px-4 pb-4 text-center text-2xl font-bold text-white">
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
