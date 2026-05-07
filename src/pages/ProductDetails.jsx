import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";
import Like from "../UI/Like";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId, 10));

  return (
    <div>
      {product ? (
        <div className="max-w-2xl mx-auto w-full">
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
            <Link
              to={`/category/${product.categoryId}`}
              className="underline underline-offset-3"
            >
              {product.categoryId}
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
          <h1 className="mb-5 text-2xl font-semibold">Product Details</h1>
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
              Price: {product.price}$
            </p>
            <p className="text-base text-gray-600">{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
