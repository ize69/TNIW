import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { peopleData } from "./data";
import stylesUrl from "~/styles/infoSections.css";
import PersonCard from "./PersonCard";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl }];

function CrewSection() {
  const roleToCheck = "crew";
  const filteredData = peopleData.filter((person) => person.crew === roleToCheck);

  return (
    <div className="main-style-guide">
      <h2>Crew</h2>
      <p>Crew info</p>
      <div className="crew-members">
        {filteredData.map((person) => (
          <PersonCard key={person.first} person={person} />
        ))}
      </div>
    </div>
  );
}

export default CrewSection;
