import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/info-sections.css";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl }];
import { peopleData } from "./data"; // Import the JSON data

function CrewSection() {
  const roleToCheck = "crew";
  const filteredData = peopleData.filter((person) => person.crew === roleToCheck);

  return (
    <div>
      <h2>Crew</h2>
      <p>Crew info</p>
      <div className="crew-members">
        {filteredData.map((person) => (
          <div key={person.first} className="crew-member">
            <img src={`assets/${person.photoPath}`} alt={`${person.first} ${person.last}`} className="headshots"/>
            <p>{`${person.first} ${person.last}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrewSection;
