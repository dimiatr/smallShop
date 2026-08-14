import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

export function Provider({ children }) {
  const [like, setLike] = useState(() => {
    const saveData = localStorage.getItem("idLikes");
    const likedItems = saveData && new Set(JSON.parse(saveData));

    return likedItems ? likedItems : new Set();
  });

  const [cart, setCart] = useState(() => {
    const saveData = localStorage.getItem("cart");

    return saveData ? JSON.parse(saveData) : {};
  });

  function toggleLike(productId) {
    setLike((prev) => {
      const current = new Set(prev);

      if (current.has(productId)) {
        current.delete(productId);
      } else {
        current.add(productId);
      }

      return current;
    });
  }

  function addToCart(productId) {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  }

  function changeQuantity(productId, quantity) {
    setCart((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }

      return { ...prev, [productId]: quantity };
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }

  function clearCart() {
    setCart({});
  }

  useEffect(() => {
    const saveLike = JSON.stringify([...like]);

    localStorage.setItem("idLikes", saveLike);
  }, [like]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <MyContext.Provider
      value={{
        toggleLike,
        like,
        cart,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
