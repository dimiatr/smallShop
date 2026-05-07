import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../components/MyContext";
import { products } from "../data/data";

function Favorites() {
  const { like } = useContext(MyContext);

  const favoritProducts = products.filter((el) => like.has(String(el.id)));

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="mb-7 text-2xl font-semibold">Favorite Products</h1>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoritProducts.map((el) => (
          <li
            key={el.id}
            className="rounded-md border border-gray-600 bg-blue-200 p-5"
          >
            <Link to={`/product/${el.id}`}>
              <img src={el.img} alt={el.name} />
              <p className="mt-3 text-lg font-bold text-violet-700">
                Price: {el.price}$
              </p>
              <p className="text-base text-gray-600">{el.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
