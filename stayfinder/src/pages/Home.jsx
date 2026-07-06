import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home(){

return(

<>

<Navbar/>

<Hero/>

<section className="container" style={{padding:"80px 0"}}>

<h2
style={{
textAlign:"center",
marginBottom:"30px"
}}
>

Welcome to StayFinder

</h2>

<p
style={{
textAlign:"center",
fontSize:"18px",
lineHeight:"1.7"
}}
>

Discover hundreds of hotels across India.

Compare prices, ratings, and locations to find your perfect stay.

</p>

</section>

<Footer/>

</>

);

}

export default Home;