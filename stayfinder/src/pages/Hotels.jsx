import {useEffect,useState} from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import HotelCard from "../components/HotelCard";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";

import {getHotels} from "../services/hotelApi";

function Hotels(){

const [hotels,setHotels]=useState([]);
const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");
const [location,setLocation]=useState("");
const [rating,setRating]=useState("");
const [sort,setSort]=useState("");

const [currentPage,setCurrentPage]=useState(1);

const perPage=12;

useEffect(()=>{

async function load(){

const data=await getHotels();

setHotels(data);

setLoading(false);

}

load();

},[]);

if(loading) return <Loader/>;

let filtered=[...hotels];

filtered=filtered.filter(h=>{

const matchSearch=

h.name.toLowerCase().includes(search.toLowerCase()) ||

h.location.toLowerCase().includes(search.toLowerCase());

const matchLocation=

location==="" || h.location===location;

const matchRating=

rating==="" || h.rating>=Number(rating);

return matchSearch && matchLocation && matchRating;

});

if(sort==="low"){

filtered.sort((a,b)=>a.price-b.price);

}

if(sort==="high"){

filtered.sort((a,b)=>b.price-a.price);

}

const locations=[...new Set(hotels.map(h=>h.location))];

const totalPages=Math.ceil(filtered.length/perPage);

const currentHotels=filtered.slice(

(currentPage-1)*perPage,

currentPage*perPage

);

return(

<>

<Navbar/>

<div
className="container"
style={{
display:"grid",
gridTemplateColumns:"280px 1fr",
gap:"30px",
padding:"40px 0"
}}
>

<FilterSidebar

search={search}
setSearch={setSearch}

location={location}
setLocation={setLocation}

rating={rating}
setRating={setRating}

sort={sort}
setSort={setSort}

locations={locations}

/>

<div>

<h1>

Explore Hotels

</h1>

<p>

{filtered.length} Hotels Found

</p>

<div className="hotels-grid">

{

currentHotels.map(hotel=>(

<HotelCard

key={hotel.id}

hotel={hotel}

/>

))

}

</div>

<Pagination

currentPage={currentPage}

totalPages={totalPages}

setCurrentPage={setCurrentPage}

/>

</div>

</div>

<Footer/>

</>

)

}

export default Hotels;