import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <h1>hello app</h1>
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/cart"> Cart </Link> ||
        <Link to="/wishlist"> Wishlist </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
