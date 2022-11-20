import React, { useState } from "react";
import "./TeamStyles.css";
import TeamCard from "./TeamCard/TeamCard";
import SantiPic from "./TeamPics/santi.svg";
import GelsonPic from "./TeamPics/jr.svg";
import AilanyPic from "./TeamPics/ailany.svg";
import JzonPic from "./TeamPics/jzon.svg";
import EpsonPic from "./TeamPics/epson.svg";
import CharlesPic from "./TeamPics/charles.svg";
import AlexisPic from "./TeamPics/alexis.svg";

const Team = () => {
  var data = require("./teammates.json");
  console.log(data);

  return (
    <div className="team-container">
      <h1 className="team-container-h1-first">The team behind</h1>
      <h1 className="team-container-h1-second">Crawler.io</h1>
      <p>
        Our team works hard to bring you exceptional SEO tools and services.
      </p>
      <div className="team-members-container">
        <TeamCard member={data.team[0]} pic={SantiPic} />
        <TeamCard member={data.team[1]} pic={GelsonPic} />
        <TeamCard member={data.team[2]} pic={AilanyPic} />
        <TeamCard member={data.team[3]} pic={JzonPic} />
        <TeamCard member={data.team[4]} pic={EpsonPic} />
        <TeamCard member={data.team[5]} pic={CharlesPic} />
        <TeamCard member={data.team[6]} pic={AlexisPic} />
      </div>
      {/* <div className="team-members-container">
        <TeamCard member={data.team[4]} pic={EpsonPic} />
        <TeamCard member={data.team[5]} pic={CharlesPic} />
        <TeamCard member={data.team[6]} pic={AlexisPic} />
      </div> */}
    </div>
  );
};

export default Team;
