import { peopleData } from "./data";

interface Person {
  first: string;
  last: string;
  role: string;
  crew: string;
  billingPriority: number;
  bio: string;
  photoPath: string;
  whatTheyDo: string;
}

export function filterPeopleByRole(roles: string[]): Person[] {
  return peopleData.filter((person) => roles.includes(person.role));
}