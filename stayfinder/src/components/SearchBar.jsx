import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(){

const [search,setSearch]=useState("");

const navigate=useNavigate();

const handleSearch=()=>{

navigate(`/hotels?search=${search}`);

};

return(

<div
style={{
display:"flex",
gap:"10px",
marginTop:"20px"
}}
>

<input

type="text"

placeholder="Search by city or hotel"

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={{

padding:"15px",

width:"320px",

borderRadius:"8px",

border:"none"

}}

/>

<button

onClick={handleSearch}

style={{

padding:"15px 30px",

background:"#f59e0b",

color:"white",

borderRadius:"8px"

}}

>

Search

</button>

</div>

);

}

export default SearchBar;