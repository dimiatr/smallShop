import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/data";
import Input from "../UI/Input";
import Label from "../UI/Label";

function Category() {
  const { categoryId } = useParams();
  const [inpValue, setInpValue] = useState("");
  const [filterPriceProducts, setFilterPriceProducts] = useState(null);
  const [showClear, setShowClear] = useState(false);

  function handleChange(e) {
    setInpValue(e.target.value);
    setShowClear(Boolean(e.target.value));
  }

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId,
  );

  function sortedPrice() {
    const max = Number(inpValue) || Infinity;
    const result = currentCategoryArray.filter(
      (product) => product.price <= max,
    );
    setFilterPriceProducts(result);
  }

  function resetFilter() {
    setFilterPriceProducts(null);
    setInpValue("");
    setShowClear(false);
  }

  const listRender =
    filterPriceProducts !== null ? filterPriceProducts : currentCategoryArray;

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-4 flex items-center gap-1">
        <Link to={"/"} className="underline underline-offset-3">
          Category
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        {categoryId}
      </div>
      <div className="my-8 flex items-center gap-2">
        <Label htmlFor="maxPrice">Max Price</Label>
        <div className="relative flex-1 sm:flex-none">
          <Input
            id={"maxPrice"}
            placeholder={"Enter max price"}
            value={inpValue}
            handleChange={handleChange}
            w="w-full sm:w-44 pr-7"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`absolute right-1 top-1.5 size-5 cursor-pointer ${showClear ? "" : "hidden"}`}
            onClick={resetFilter}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <button
          type="button"
          className="rounded bg-blue-400 px-3 py-1 text-white"
          onClick={sortedPrice}
        >
          Search
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
        {listRender.map((product) => (
          <li
            className="overflow-hidden rounded-md border border-gray-600"
            key={product.name}
          >
            <Link
              to={`/product/${product.id}`}
              className="relative group block"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-400 via-transparent to-green-500 anim group-hover:bg-gray-900/40">
                <div className="block text-center text-3xl font-bold leading-relaxed text-white anim group-hover:scale-125">
                  {product.name} <br />
                  {product.price}$
                </div>
              </div>
              <img src={product.img} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
