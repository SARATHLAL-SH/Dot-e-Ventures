import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { homepageDetails } from "../../data/homepageDetails";

function Home() {
  const navigate = useNavigate();
  const details = homepageDetails;
  return (
    <div className="homepage">
      <h1>Courses</h1>
      <div className="wrapper">
        {details && details.map((card) => (
          <div className="container" onClick={() => navigate(`${card.links}`)}>
            <div className="imgcontainer">
              <img src={card.image} alt={card.image} className="ImageHtml" />
            </div>
            <div className="description">
              <h1>{card.content}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
