// data.js
// contains the data about ever one involve in the production
export interface Person {
  first: string;
  last: string;
  role: string;
  crew: string;
  billingPriority: number;
  bio: string;
  photoPath: string;
  whatTheyDo: string;
}

export const peopleData = [
    {
      first: "Gail",
      last: "Gonzalez",
      role: "cast",
      crew: "cast",
      billingPriority: 1,
      bio: "Joe Smoe is a great actor.",
      photoPath: "headshots/GailG.jpg",
      whatTheyDo: "Guide",
    },
    {
      first: "james",
      last: "low",
      role: "cast",
      crew: "cast",
      billingPriority: 1,
      bio: "Joe Smoe is a great actor.",
      photoPath: "headshots/headshot-filler.png",
      whatTheyDo: "stuff",
    },
    {
      first: "sohie",
      last: "Smith",
      role: "crew",
      crew: "crew",
      billingPriority: 2,
      bio: "John Smith is a great cast guy.",
      photoPath: "headshots/headshot-filler.png",
      whatTheyDo: "acting",
    },
    {
      first: "John",
      last: "Smith",
      role: "crew",
      crew: "crew",
      bio: "John Smith is a great crew.",
      billingPriority: 1,
      photoPath: "headshots/headshot-filler.png",
      whatTheyDo: "acting",
    },
    {
      first: "kevin",
      last: "Smith",
      role: "crew",
      crew: "crew",
      bio: "John Smith is a great crew.",
      billingPriority: 2,
      photoPath: "headshots/headshot-filler.png",
      whatTheyDo: "acting",
    },
    // Add more data here
  ];
  