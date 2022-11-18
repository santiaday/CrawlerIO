import React, { useState } from "react";
import "./TeamCard.css";

const TeamCard = ({ member, pic }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-card-circle-wrapper">
        <div
          className="team-member-card-circle"
          style={{ backgroundImage: "url(" + pic + ")" }}
        ></div>
      </div>
      <div className="team-member-card-name">
        <h2>
          {member.firstName}
          <br />
          {member.lastName}
        </h2>
      </div>
    </div>
  );
};

export default TeamCard;
