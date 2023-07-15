import "./HeroStyles.css";
import Trip1 from "../assets/pic3.jpg"

function Hero(props) {
  return (
    <>
      <div className={props.cName}>

      <img alt="HeroImg" src={Trip1}/>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <br/>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
      </div>
    </>
  );
}

export default Hero;