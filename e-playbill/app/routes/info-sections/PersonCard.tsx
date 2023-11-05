import React from "react";

interface Person {
  first: string;
  last: string;
  crew: string;
  photoPath: string;
  role: string;
  bio: string;
  group: number;
}

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div key={person.role} className='castMember'>
      <div className="person-info">
        <span className="role">{person.role}</span>
        <span className="name">{`${person.first} ${person.last}`}</span>
      </div>
      <img src={`assets/${person.photoPath}`} alt={`${person.first} ${person.last}`} className="headshots" />
      <p className="bio">{person.bio}</p>
    </div>
  );
};

export default PersonCard;
