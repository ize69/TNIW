// cast.tsx
// defines the cast section of the info page
import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/infoSections.css";
import { peopleData } from "./data"; // Import the JSON data
import PersonCard from "./PersonCard";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl }];

function CastSection() {
    const roleToCheck = "cast";
    const filteredData = peopleData.filter((person) => person.crew === roleToCheck);
  
    return (
      <div className="main-style-guide">
        <h2>Cast</h2>
        <p>Cast info</p>
        <div className="crew-members">
          {filteredData.map((person) => (
            <PersonCard key={person.first} person={person} />
          ))}
        </div>
      </div>
    );
  }

export default CastSection;