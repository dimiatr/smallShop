import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

export function Provider({ children }) {
  const [like, setLike] = useState(() => {
    const saveData = localStorage.getItem("idLikes");
    const likedItems = saveData && new Set(JSON.parse(saveData));

    return likedItems ? likedItems : new Set();
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

  useEffect(() => {
    const saveLike = JSON.stringify([...like]);

    localStorage.setItem("idLikes", saveLike);
  }, [like]);

  return (
    <MyContext.Provider value={{ toggleLike, like }}>
      {children}
    </MyContext.Provider>
  );
}
