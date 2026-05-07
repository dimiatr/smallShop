import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col gap-5 bg-gradient-to-b from-blue-700/50 to-sky-400/50 px-4 py-8 xs:px-5">
      <div className="flex flex-wrap gap-10 sm:justify-around">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Customer Support</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/favorite">Favorites</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Project Info</h3>
          <ul>
            <li>Frontend practice project</li>
            <li>React and Tailwind CSS</li>
            <li>Routing and localStorage</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Contact Us</h3>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>
      <p className="sm:text-center">&copy; 2025 YourStore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
