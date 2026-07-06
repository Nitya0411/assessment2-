import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

import "../styles/hotelcard.css";

function HotelCard({ hotel }) {

  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  const isFavorite = favorites.find(item => item.id === hotel.id);

  return (

    <div className="hotel-card">

      <img src={hotel.thumbnail} alt={hotel.name} />

      <div className="hotel-content">

        <h2>{hotel.name}</h2>

        <p>📍 {hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <h3>₹{Number(hotel.price).toLocaleString()}</h3>

        <div className="card-buttons">

          <Link
            className="details-btn"
            to={`/hotel/${hotel.id}`}
          >
            View Details
          </Link>

          <button

            className="favorite-btn"

            onClick={() => toggleFavorite(hotel)}

          >

            {isFavorite ? "❤️" : "🤍"}

          </button>

        </div>

      </div>

    </div>

  );

}

export default HotelCard;