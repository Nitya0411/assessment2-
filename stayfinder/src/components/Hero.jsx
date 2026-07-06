import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import SearchBar from "./SearchBar";

function Hero() {

const navigate = useNavigate();

return (

<section className="hero">

<div className="overlay">

<h1>Find Your Perfect Stay</h1>

<p>
Search from hundreds of hotels around the world.
</p>

<SearchBar />

<button
className="explore-btn"
onClick={()=>navigate("/hotels")}
>

Explore Hotels

</button>

</div>

</section>

);

}

export default Hero;