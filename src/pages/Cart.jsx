import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { MyContext } from "../components/MyContext";
import { formatPrice, products } from "../data/data";

function Cart() {
  const navigate = useNavigate();
  const { cart, changeQuantity, removeFromCart, clearCart } =
    useContext(MyContext);

  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find((p) => String(p.id) === id);

      return product ? { id, quantity, product } : null;
    })
    .filter(Boolean);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  function handleSubmit(e) {
    e.preventDefault();
    clearCart();
    navigate("/thanks");
  }

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <h1 className="text-2xl font-semibold mb-5">Корзина</h1>

      <div className="flex flex-col gap-4 rounded border-2 border-gray-600 p-3 md:flex-row md:justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold">Ваши товары:</h2>

          {cartItems.length === 0 ? (
            <p className="text-base text-gray-600">
              Корзина пуста.{" "}
              <Link to="/" className="underline underline-offset-3">
                Посмотреть каталог
              </Link>
            </p>
          ) : (
            <>
              <ul className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 border-b border-gray-300 pb-3"
                  >
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="size-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-600">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="anim size-6 cursor-pointer rounded border border-gray-300 hover:bg-gray-100"
                        onClick={() =>
                          changeQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="w-4 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        className="anim size-6 cursor-pointer rounded border border-gray-300 hover:bg-gray-100"
                        onClick={() =>
                          changeQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="w-24 text-right font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="anim size-5 cursor-pointer text-gray-500 hover:text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
              <hr className="border-gray-300" />
              <p className="text-base font-medium">
                Итого: {formatPrice(total)}
              </p>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex min-w-1/3 flex-col gap-4">
          <h2 className="text-xl font-semibold">Оформление заказа:</h2>

          <div className="flex flex-col-reverse gap-1">
            <Input id={"name"} placeholder={"Введите ваше полное имя"} required />
            <Label htmlFor="name">Имя</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <Input
              id={"email"}
              type={"email"}
              placeholder={"Введите адрес электронной почты"}
              required
            />
            <Label htmlFor="email">Email</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <textarea
              id="address"
              placeholder="Введите адрес доставки"
              rows="2"
              className="w-full rounded border border-gray-300 p-2 outline-none focus:border-sky-400 anim"
              required
            ></textarea>
            <Label htmlFor={"address"}>Адрес</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <select
              id="payment"
              className="border border-gray-300 p-1.5 outline-none"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Выберите способ оплаты
              </option>
              <option value="creditCard">Банковская карта</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Наличными при получении</option>
            </select>
            <Label htmlFor={"payment"}>Способ оплаты</Label>
          </div>

          <button
            type="submit"
            disabled={cartItems.length === 0}
            className="anim cursor-pointer rounded-sm bg-sky-500 px-3 py-2 text-base font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
