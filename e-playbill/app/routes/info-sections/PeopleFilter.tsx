import React from "react";
import { filterPeopleByRole } from "./filterPeopleByRole";
import "../../styles/filter.css";
import CastSection from "./CastSection";
import CrewSection from "./CrewSection";

interface PeopleFilterProps {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

enum GroupName {
  Rosemary,
  Pansy,
  Rue,
  Violet
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
    <main>
      <label htmlFor="groupSelecter">Filter by group:</label>
      <select name="groupSelector" id="groupSelector" value={role} onChange={handleRoleChange}>
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
    </main>
  );
}