import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName="Hero"  
    heroImg="C:\Users\Shri Durga\pikachu\pro\src\assets\pic1 (3).jpg"
    title="Your Journey Your Story"

    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip />
    <Footer/>
    </>
  );
}

export default Home;