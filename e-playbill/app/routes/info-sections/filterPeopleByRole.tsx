import { peopleData } from "./data";
import { Person } from "./data";

export function filterPeopleByRole(roles: string[]): Person[] {
  return peopleData.filter((person) => roles.includes(person.position));
}