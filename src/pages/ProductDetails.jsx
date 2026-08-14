import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { categories, formatPrice, products } from "../data/data";
import Like from "../UI/Like";
import { MyContext } from "../components/MyContext";

function ProductDetails() {
  const { productId } = useParams();
  const { cart, addToCart } = useContext(MyContext);

  const product = products.find((p) => p.id === parseInt(productId, 10));
  const quantityInCart = cart[productId] || 0;
  const categoryName = product
    ? (categories.find((c) => c.id === product.categoryId)?.name ??
      product.categoryId)
    : null;

  return (
    <div>
      {product ? (
        <div className="max-w-2xl mx-auto w-full">
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
            <Link
              to={`/category/${product.categoryId}`}
              className="underline underline-offset-3"
            >
              {categoryName}
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
            <span>{product.name}</span>
          </div>
          <h1 className="mb-5 text-2xl font-semibold">О товаре</h1>
          <div className="flex flex-col gap-2 rounded bg-gradient-to-br from-violet-400/10 to-green-500/10 p-4">
            <div className="mb-3 flex items-center justify-between gap-3 text-xl font-semibold">
              <h2 className="text-gray-700">{product.name}</h2>
              <Like id={productId} />
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="mx-auto rounded-md sm:h-[450px]"
            />
            <p className="mt-3 text-lg font-bold text-violet-700">
              Цена: {formatPrice(product.price)}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="anim cursor-pointer rounded-sm bg-sky-500 px-3 py-2 text-base font-medium text-white hover:bg-sky-700"
                onClick={() => addToCart(productId)}
              >
                В корзину
              </button>
              {quantityInCart > 0 && (
                <span className="text-sm text-gray-600">
                  В корзине: {quantityInCart}
                </span>
              )}
            </div>
            <p className="text-base text-gray-600">{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Товар не найден</p>
      )}
    </div>
  );
}

export default ProductDetails;
