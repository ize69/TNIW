import React from "react";
import type { Person } from "./data";
import stylesUrl from "~/styles/infoSections.css";
import PersonCard from "./PersonCard";

interface CastSectionProps {
  people: Person[];
}

function CastSection(props: CastSectionProps) {
  const { people } = props;

  return (
    <div className="cast-members">
        {people.map((person) => (
          <PersonCard key={person.first} person={person} />
        ))}
    </div>
  );
}

export default CastSection;