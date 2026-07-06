import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (hotel) => {

    const exists = favorites.find(item => item.id === hotel.id);

    if (exists) {

      setFavorites(favorites.filter(item => item.id !== hotel.id));

    } else {

      setFavorites([...favorites, hotel]);

    }

  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}