import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Gallery from "../components/Gallery";

import { getHotels } from "../services/hotelApi";

import "../styles/details.css";

function HotelDetails() {

  const { id } = useParams();

  const [hotel, setHotel] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchHotel() {

      const hotels = await getHotels();

      const selected = hotels.find(
        (item) => item.id === Number(id)
      );

      setHotel(selected);

      setLoading(false);
    }

    fetchHotel();

  }, [id]);

  if (loading) return <Loader />;

  if (!hotel) {

    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Hotel Not Found
      </h2>
    );

  }

  return (
    <>

      <Navbar />

      <div className="container details-page">

        <Gallery photos={hotel.photos} />

        <div className="details-info">

          <h1>{hotel.name}</h1>

          <p className="detail-location">
            📍 {hotel.location}
          </p>

          <p className="detail-rating">
            ⭐ {hotel.rating}
          </p>

          <h2 className="price">
            ₹{Number(hotel.price).toLocaleString()} / Night
          </h2>

          <h3>Description</h3>

          <p className="description">
            {hotel.description}
          </p>

          <button className="book-btn">
            Book Now
          </button>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default HotelDetails;