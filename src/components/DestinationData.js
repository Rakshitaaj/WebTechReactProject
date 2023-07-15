import { Component } from "react";

import Mountain1 from "../assets/lake.jpg";
import Mountain2 from "../assets/hill.jpg";
import Mountain3 from "../assets/sky.jpg";
import Mountain4 from "../assets/wave.jpg";
import "./DestinationStyles.css";



class DestinationData extends Component{
    render()
    {
      return(
        <div className="first-des">
    <div className="des-text">
        <h2> {this.props.heading}</h2>
        <p>{this.props.text}</p>


        
    </div>
    <div className="image">
        <img alt="img" src={this.props.img1}/>
        <img alt="img" src={this.props.img2}/>
    </div>
    </div>
      );
      };

      }

    
    
export default DestinationData;