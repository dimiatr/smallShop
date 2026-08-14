import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { categories, formatPrice, products } from "../data/data";
import Input from "../UI/Input";
import Label from "../UI/Label";

function Category() {
  const { categoryId } = useParams();
  const categoryName =
    categories.find((c) => c.id === categoryId)?.name ?? categoryId;
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
          Категории
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
        {categoryName}
      </div>
      <div className="my-8 flex items-center gap-2">
        <Label htmlFor="maxPrice">Макс. цена</Label>
        <div className="relative flex-1 sm:flex-none">
          <Input
            id={"maxPrice"}
            placeholder={"Введите макс. цену"}
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
          Найти
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
        {listRender.map((product) => (
          <li
            className="anim group overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg"
            key={product.name}
          >
            <Link
              to={`/product/${product.id}`}
              className="relative block aspect-[4/5] overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="anim size-full object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 px-3 pb-3 text-center">
                <p className="text-lg font-bold text-white">{product.name}</p>
                <p className="text-base font-semibold text-white/90">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
