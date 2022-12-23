import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Rectangle from "./Rectangle.png";
import "./TitlesPage.css";

const TitlesPage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      {data?.topics?.map((user) => (
        <div className="userProfile_streak">
          <div className="TitlesPage_fullLession">
            <div
              className="TitlesPage_background_image"
              style={{ backgroundImage: `url(${Rectangle})` }}
            >
              <h3 className="TitlesPage_essentials">The essentials</h3>
            </div>
            <div>
              <h4 style={{ background: "#E6A084" }}>Greetings</h4>
              <h4 style={{ background: "#EEDAC0" }}>{user.name}</h4>
              <h4 style={{ background: "#256AA5" }}>Reservation</h4>
              <h4 style={{ background: "#4CAABC" }}>Check out</h4>
              <h4 style={{ background: "#11273E" }}>Information</h4>
              <h4 style={{ background: "#C4DDE8" }}>Room problems</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitlesPage;
