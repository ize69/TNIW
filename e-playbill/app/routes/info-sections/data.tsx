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
      bio: "Gail Gonzalez [they/them] (Guide) is a 3rd-year SOIS student with dual concentrations in Psychology and ASL Interpreting. They are in the second cohort of the ASLIE’s Certificate in Deaf Interpreting program. An avid participant of RIT & NTID Performing Arts, you may have seen them before as Death in Everybody or as O.G. Howland in Men on Boats. They would like to express gratitude and appreciation to their loved ones (you know who you are :D). Enjoy the show!",
      photoPath: "headshots/GailG.jpg",
      whatTheyDo: "Guide",
    },
    {
      first: "Jaide",
      last: "Winant",
      role: "cast",
      crew: "cast",
      billingPriority: 1,
      bio: "Jaide Winant [she/her] (Ophelia) is a 4th-year ASL Interpreting major from Albany, NY. She has had the wonderful opportunity of being involved in two previous productions with RIT & NTID Performing Arts where she played Daniela in In The Heights and Galya Armolinskaya in Deaf Republic. She’d like to thank the cast and crew for their dedication and hard work over the last few months to put together this unique production. Break a leg/finger!",
      photoPath: "headshots/JaideW.jpg",
      whatTheyDo: "Ophelia",
    },
    {
      first: "Valentina",
      last: "Camino",
      role: "cast",
      crew: "cast",
      billingPriority: 2,
      bio: "Valentina Camino [she/her] (Laertes) is a transfer 1st-year student majoring in Liberal Arts–Journalism. She is from Kenosha, WI. Valentina’s favorite role was playing the mother of Veruca Salt in Charlie and the Chocolate Factory. Though her role is a minor character, she is still shining brightly. She’d like to thank everybody! Mwah gorgeous.",
      photoPath: "headshots/ValentinaC.png",
      whatTheyDo: "Laertes",
    },
    {
      first: "Elliana",
      last: "Soto",
      role: "cast",
      crew: "cast",
      billingPriority: 2,
      bio: "Elliana Soto [she/her] (Polonius) is a 4th-year ASL Interpreting major. Born and raised in Rochester, NY, her favorite role was in high school when she played Marci in Almost, Maine. Elliana would like to thank all of the cast and crew for such an amazing experience.",
      photoPath: "headshots/EllianaS.png",
      whatTheyDo: "Polonius",
    },
    {
      first: "Lavada",
      last: "Holz",
      role: "cast",
      crew: "cast",
      bio: "Lavada Holz [they/them] (Hamlet) is a 2nd-year ASL Interpreting major from Sultan, WA. If this play was on a stage, it would be their first onstage role since high school! They love working with their castmates, like they did as a swing for the RIT & NTID Performing Arts production of Everybody. They have also appeared in Tracks! and Oh, What a Tangled Web! They hope that whichever cast of characters you see, you’ll love this one-of-a-kind performance. Enjoy!",
      billingPriority: 2,
      photoPath: "headshots/LavadaH.png",
      whatTheyDo: "Hamlet",
    },
    {
      first: "Sofia",
      last: "DeCredico",
      role: "cast",
      crew: "cast",
      bio: "Sofia DeCredico [she/her] (Guide) is in her last year in the Applied and Computational Mathematics BS/MS program. Some of Sofia’s favorite roles include dancing in a production of Spoon River Anthology and playing Bradley in Men on Boats. Sofia would like to thank the entire cast and crew for working so hard to put this unique show together. Hope you enjoy!",
      billingPriority: 2,
      photoPath: "headshots/SofiaD.png",
      whatTheyDo: "Guide",
    },
    {
      first: "Rebecca",
      last: "Lewis",
      role: "cast",
      crew: "cast",
      bio: "Rebecca Lewis [she/they] (Ophelia) is a 2nd-year Medical Illustration major from Colorado Springs, CO. Before this show you may have seen her on campus as the Lottery Roles in Everybody and Vera Claythorne in And Then There Were None. She would like you to know that her cat’s name is in fact Ophelia, but she could not be here tonight. Enjoy our take on Shakespeare’s Hamlet!",
      billingPriority: 2,
      photoPath: "headshots/RebeccaL.png",
      whatTheyDo: "Ophelia",
    },
    {
      first: "Nathalie",
      last: "Phongsavanh",
      role: "cast",
      crew: "cast",
      bio: "Nathalie Phongsavanh [she/her] (Laertes) is a 1st-year student currently majoring in Science Exploration. Coming from an international background, some of Nathalie’s favorite roles include The Lion from The Wizard of Oz and The Cheshire Cat from Alice Through The Looking Glass–like the charismatic cool cat she is. She would like to thank the cast, crew, and audience members. Please please please enjoy the show!",
      billingPriority: 2,
      photoPath: "headshots/NathalieP.png",
      whatTheyDo: "Laertes",
    },
    {
      first: "Bruno",
      last: "Karpinski",
      role: "cast",
      crew: "cast",
      bio: "Bruno Karpinksi (Polonius) is a 1st-year Mechanical Engineering major from Bowie, MD. His favorite role is that of Colonel Mustard from his high school’s production of Clue. He hopes you enjoy this unique theater experience.",
      billingPriority: 2,
      photoPath: "headshots/BrunoK.png",
      whatTheyDo: "Polonius",
    },
    {
      first: "Teddy",
      last: "Walsh",
      role: "cast",
      crew: "cast",
      bio: "Teddy Walsh [he/him] (Hamlet) is a 4th-year Game Design and Development major. He’s from Newton, MA. Last year he played Evil Soldier #2 and the voice of several villagers in Deaf Republic! He won’t tell you to enjoy the show because it's a free country and you can do what you want.",
      billingPriority: 2,
      photoPath: "headshots/TeddyW.png",
      whatTheyDo: "Hamlet",
    },
  ];
  