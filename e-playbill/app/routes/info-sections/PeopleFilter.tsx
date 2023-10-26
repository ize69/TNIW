import React from "react";
import { filterPeopleByRole } from "./filterPeopleByRole";
import "./filter.css";
import CastSection from "./CastSection";
import CrewSection from "./CrewSection";

interface Person {
  first: string;
  last: string;
  role: string;
  crew: string;
  image: string;
  bio: string;
}

interface PeopleFilterProps {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

export function PeopleFilter(props: PeopleFilterProps) {
  const { role, setRole } = props;
  const people = filterPeopleByRole([role]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  React.useEffect(() => {
    console.log("PeopleFilter re-rendered with role:", role);
  }, [role]);

  const roles = people.map((person) => person.role);
  const uniqueRoles = [...new Set(roles)];

  return (
    <div className="filter">
      <label htmlFor="role">Filter by role:</label>
      <select
        name="role"
        id="role"
        value={role}
        onChange={handleRoleChange}
      >
        {uniqueRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      {role === "cast" ? (
        <CastSection people={people} />
      ) : (
        <CrewSection people={people} />
      )}
    </div>
  );
}