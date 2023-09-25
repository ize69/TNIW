import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/infoSections.css";
import { peopleData } from "./data"; // Import the JSON data

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl }];

function CrewSection() {
  const roleToCheck = "crew";
  const filteredData = peopleData.filter((person) => person.crew === roleToCheck);

  return (
    <div className="main-style-guide"> {/* Apply main style guide class */}
      <h2>Crew</h2>
      <p>Crew info</p>
      <div className="crew-members">
        {filteredData.map((person) => (
          <div key={person.first} className="crew-member">
            <p className="person-name">{`${person.first} ${person.last}`}</p> {/* Apply person-name class */}

            <img
              src={`assets/${person.photoPath}`}
              alt={`${person.first} ${person.last}`}
              className="headshots" // Apply headshots and info-sections classes
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrewSection;
