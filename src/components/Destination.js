
import Mountain1 from "../assets/maldives 1.jpg";
import Mountain2 from "../assets/maldives2.jpg";
import Mountain3 from "../assets/tree.jpg";
import Mountain4 from "../assets/hill.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the Oppurtunity to Explore the World</p>

        <DestinationData
        className="first-des"
          heading="Maldives"
          text="Comprising a territory spanning roughly 90,000 square kilometres (35,000 sq mi) including the sea, land area of all the islands comprises 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states and the smallest Asian country as well as one of the smallest Muslim-majority countries by land area and, with around 557,751 inhabitants, the 2nd least populous country in Asia.Comprising a territory spanning roughly 90,000 square kilometres (35,000 sq mi) including the sea, land area of all the islands comprises 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states and the smallest Asian country as well as one of the smallest Muslim-majority countries by land area and, with around 557,751 inhabitants, the 2nd least populous country in Asia. "
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
        className="first-des-reverse"
          heading="Goa"
          text="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda"
          img1={Mountain3}
          img2={Mountain4}
        />
    
    </div>

  );
};

export default Destination;