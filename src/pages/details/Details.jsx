import React from "react";
import YouTube from "react-youtube";
import "./Details.css";
import { useNavigate, useParams } from "react-router";
import { Datas } from "../../data/courseData";

function Details() {
  const { id } = useParams();
  const details = Datas[id];
  const navigate = useNavigate();
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      {details && (
        <div className="DetailsWrapper">
          <div className="detailContainer">
            <div className="detailDescr">
              <h1 className="detaiHead">{details.heading}</h1>
            </div>
            <div className="detaiVideo">
              <YouTube videoId={details.videoId} opts={opts} />
            </div>
            <div className="detaisdesCont">
              <h1 className="DetaislSubHead">Description</h1>
              <p className="detailDesc">{details.description}</p>
            </div>
            <div className="btncontainer">
            <button className="quisBtn" onClick={() => navigate("/quiz")}>
              Take the Quiz
            </button></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
