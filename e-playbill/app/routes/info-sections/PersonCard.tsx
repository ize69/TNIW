import React from "react";

interface Person {
  first: string;
  last: string;
  crew: string;
  photoPath: string;
  whatTheyDo: string;
}

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div key={person.first} className="crew-member">
      <img src={`assets/${person.photoPath}`} alt={`${person.first} ${person.last}`} className="headshots" />
      <div>
        <p className="person-name">{`${person.first} ${person.last}`}</p>
        <p className="whatTheyDo">{person.whatTheyDo}</p>
      </div>
    </div>
  );
};

export default PersonCard;
