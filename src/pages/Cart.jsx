import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { MyContext } from "../components/MyContext";

function Cart() {
  const navigate = useNavigate();
  const { like } = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/thanks");
  }

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <h1 className="text-2xl font-semibold mb-5">Shopping Cart</h1>

      <div className="flex flex-col gap-4 rounded border-2 border-gray-600 p-3 md:flex-row md:justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold">Your Items:</h2>
          <ul className="text-base *:flex *:items-center *:gap-4">
            <li>
              <span>Favorite items</span>
              <span>{like.size}</span>
            </li>
          </ul>
          <hr className="border-gray-300" />
          <p className="text-base font-medium">Total: Demo Checkout</p>
        </div>

        <form onSubmit={handleSubmit} className="flex min-w-1/3 flex-col gap-4">
          <h2 className="text-xl font-semibold">Enter Your Details:</h2>

          <div className="flex flex-col-reverse gap-1">
            <Input id={"name"} placeholder={"Enter your full name"} required />
            <Label htmlFor="name">Name</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <Input
              id={"email"}
              type={"email"}
              placeholder={"Enter your email address"}
              required
            />
            <Label htmlFor="email">Email</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <textarea
              id="address"
              placeholder="Enter your delivery address"
              rows="2"
              className="w-full rounded border border-gray-300 p-2 outline-none focus:border-sky-400 anim"
              required
            ></textarea>
            <Label htmlFor={"address"}>Address</Label>
          </div>

          <div className="flex flex-col-reverse gap-1">
            <select
              id="payment"
              className="border border-gray-300 p-1.5 outline-none"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
            <Label htmlFor={"payment"}>Payment Method</Label>
          </div>

          <button
            type="submit"
            className="anim cursor-pointer rounded-sm bg-sky-500 px-3 py-2 text-base font-medium text-white hover:bg-sky-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
