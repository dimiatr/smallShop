import { Link } from "react-router-dom";
import { categories } from "../data/data";

function Home() {

  return (
    <>
      <h1 className=" text-3xl font-semibold text-center mb-8">Categories</h1>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {categories.map((category) => (
          <li key={category.id} className="border border-gray-600 rounded-md overflow-hidden">
            <Link
              to={`/category/${category.name}`}
              className="relative flex items-center justify-center group"
            >
              <span className=" absolute font-bold text-white text-3xl z-10 group-hover:scale-125 anim">
                {category.name}
              </span>
              <img
                src={category.img}
                alt={category.name}
              />
              <div className=" absolute bg-gradient-to-b from-sky-400/40 via-transparent to-blue-700/40 inset-0 rounded-md anim group-hover:bg-gray-900/40"></div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
