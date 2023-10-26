import React from "react";
import type { Person } from "./data";
import stylesUrl from "~/styles/infoSections.css";
import PersonCard from "./PersonCard";

interface CrewSectionProps {
  people: Person[];
}

function CrewSection(props: CrewSectionProps) {
  const { people } = props;

  return (
    <div className="main-style-guide">
      <h2>Crew</h2>
      <p>Crew info</p>
      <div className="crew-members">
        {people.map((person) => (
          <PersonCard key={person.first} person={person} />
        ))}
      </div>
    </div>
  );
}

export default CrewSection;