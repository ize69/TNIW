// data.js
// contains the data about ever one involve in the production
export interface Person {
  first: string;
  last: string;
  position: string;
  crew: string;
  group: number;
  bio: string;
  photoPath: string;
  role: string;
}

export const peopleData = [
    {
      first: "Ryker",
      last: "D’Angelo",
      position: "cast",
      crew: "cast",
      group: 0,
      bio: "Ryker D’Angelo [he/him] (Guide) is a 3rd-year student majoring in English Studies from St. Augustine, FL. Performing arts has always captivated Ryker ever since he was a child. He was last seen in the RIT & NTID Performing Arts production of Angels in America: Millennium Approaches as a Guardian Angel. He has also played a role in several Deaf-run and produced performances in his high school. Ryker is thrilled to work with this marvelous cast and crew, and he is thankful to his friends and family for their never-ending support.", 
      photoPath: "headshots/RykerD.jpg",
      role: "Guide",
    },
    {
      first: "Jaide",
      last: "Winant",
      position: "cast",
      crew: "cast",
      group: 0,
      bio: "Jaide Winant [she/her] (Ophelia) is a 4th-year ASL Interpreting major from Albany, NY. She has had the wonderful opportunity of being involved in two previous productions with RIT & NTID Performing Arts where she played Daniela in In The Heights and Galya Armolinskaya in Deaf Republic. She’d like to thank the cast and crew for their dedication and hard work over the last few months to put together this unique production. Break a leg/finger!",
      photoPath: "headshots/JaideW.jpg",
      role: "Ophelia",
    },
    {
      first: "Valentina",
      last: "Camino",
      position: "cast",
      crew: "cast",
      group: 0,
      bio: "Valentina Camino [she/her] (Laertes) is a transfer 1st-year student majoring in Liberal Arts–Journalism. She is from Kenosha, WI. Valentina’s favorite role was playing the mother of Veruca Salt in Charlie and the Chocolate Factory. Though her role is a minor character, she is still shining brightly. She’d like to thank everybody! Mwah gorgeous.",
      photoPath: "headshots/ValentinaC.jpg",
      role: "Laertes",
    },
    {
      first: "Elliana",
      last: "Soto",
      position: "cast",
      crew: "cast",
      group: 0,
      bio: "Elliana Soto [she/her] (Polonius) is a 4th-year ASL Interpreting major. Born and raised in Rochester, NY, her favorite role was in high school when she played Marci in Almost, Maine. Elliana would like to thank all of the cast and crew for such an amazing experience.",
      photoPath: "headshots/EllianaS.jpg",
      role: "Polonius",
    },
    {
      first: "Lavada",
      last: "Holz",
      position: "cast",
      crew: "cast",
      bio: "Lavada Holz [they/them] (Hamlet) is a 2nd-year ASL Interpreting major from Sultan, WA. If this play was on a stage, it would be their first onstage role since high school! They love working with their castmates, like they did as a swing for the RIT & NTID Performing Arts production of Everybody. They have also appeared in Tracks! and Oh, What a Tangled Web! They hope that whichever cast of characters you see, you’ll love this one-of-a-kind performance. Enjoy!",
      group: 0,
      photoPath: "headshots/LavadaH.jpg",
      role: "Hamlet",
    },
    {
      first: "Sofia",
      last: "DeCredico",
      position: "cast",
      crew: "cast",
      bio: "Sofia DeCredico [she/her] (Guide) is in her last year in the Applied and Computational Mathematics BS/MS program. Some of Sofia’s favorite roles include dancing in a production of Spoon River Anthology and playing Bradley in Men on Boats. Sofia would like to thank the entire cast and crew for working so hard to put this unique show together. Hope you enjoy!",
      group: 1,
      photoPath: "headshots/SofiaD.jpg",
      role: "Guide",
    },
    {
      first: "Rebecca",
      last: "Lewis",
      position: "cast",
      crew: "cast",
      bio: "Rebecca Lewis [she/they] (Ophelia) is a 2nd-year Medical Illustration major from Colorado Springs, CO. Before this show you may have seen her on campus as the Lottery Roles in Everybody and Vera Claythorne in And Then There Were None. She would like you to know that her cat’s name is in fact Ophelia, but she could not be here tonight. Enjoy our take on Shakespeare’s Hamlet!",
      group: 1,
      photoPath: "headshots/BeccaL.jpg",
      role: "Ophelia",
    },
    {
      first: "Nathalie",
      last: "Phongsavanh",
      position: "cast",
      crew: "cast",
      bio: "Nathalie Phongsavanh [she/her] (Laertes) is a 1st-year student currently majoring in Science Exploration. Coming from an international background, some of Nathalie’s favorite roles include The Lion from The Wizard of Oz and The Cheshire Cat from Alice Through The Looking Glass–like the charismatic cool cat she is. She would like to thank the cast, crew, and audience members. Please please please enjoy the show!",
      group: 1,
      photoPath: "headshots/NathalieP.jpg",
      role: "Laertes",
    },
    {
      first: "Bruno",
      last: "Karpinski",
      position: "cast",
      crew: "cast",
      bio: "Bruno Karpinksi (Polonius) is a 1st-year Mechanical Engineering major from Bowie, MD. His favorite role is that of Colonel Mustard from his high school’s production of Clue. He hopes you enjoy this unique theater experience.",
      group: 1,
      photoPath: "headshots/BrunoK.jpg",
      role: "Polonius",
    },
    {
      first: "Teddy",
      last: "Walsh",
      position: "cast",
      crew: "cast",
      bio: "Teddy Walsh [he/him] (Hamlet) is a 4th-year Game Design and Development major. He’s from Newton, MA. Last year he played Evil Soldier #2 and the voice of several villagers in Deaf Republic! He won’t tell you to enjoy the show because it's a free country and you can do what you want.",
      group: 1,
      photoPath: "headshots/TeddyW.jpg",
      role: "Hamlet",
    },
    {
      first: "Abby",
      last: "Hill",
      position: "cast",
      crew: "cast",
      bio: "Abby Hill (Guide) is a 4th-year ASL Interpreting major and originally from Dallas, TX. Some of her favorite roles include John Wesley Powell in Men on Boats, Guardian Angel in Angels in America: Millennium Approaches, and Gwendolyn Fairfax in The Importance of Being Earnest. She is so excited to be a part of such a unique show and can’t thank the cast and crew enough for being so lovely. ",
      group: 2,
      photoPath: "headshots/AbbyH.jpg",
      role: "Guide",
    },
    {
      first: "Ace",
      last: "Gray",
      position: "cast",
      crew: "cast",
      bio: "Ace Gray [they/them] (Ophelia) is a 4th-year English major from Silver Spring, MD. You may have seen them as Everybody and Evil in the RIT & NTID Performing Arts production of Everybody. They would like to thank all of their loved ones for supporting them throughout this production. Enjoy the show! \(｡^‿^｡)/",
      group: 2,
      photoPath: "headshots/AceG.jpg",
      role: "Ophelia",
    },
    {
      first: "Alaina",
      last: "Biddle",
      position: "cast",
      crew: "cast",
      bio: "Alaina Biddle (Laertes) is a 3rd-year ASL Interpreting major from Hanover, PA. Alaina has previously been heavily involved with RIT Players and is excited to be in her first RIT & NTID Performing Arts show! Enjoy!",
      group: 2,
      photoPath: "headshots/AlainaB.jpg",
      role: "Laertes",
    },
    {
      first: "Raihiem",
      last: "Marshall",
      position: "cast",
      crew: "cast",
      bio: "Raihiem Marshall (Polonius) is a 4th-year student in the School of Individualized Study with a concentration in Leadership and Management and a minor in Theatre Arts. His favorite role is Lysander from Shakespeare’s A Midsummer Night’s Dream. He has also performed for RIT & NTID Performing Arts in Taming of the Shrew, Angels in America: Millennium Approaches, Everybody, and Deaf Republic. He loves acting and playing video games. ",
      group: 2,
      photoPath: "headshots/RaihiemM.jpg",
      role: "Polonius",
    },
    {
      first: "Tayori",
      last: "Snipe",
      position: "cast",
      crew: "cast",
      bio: "Tayori Snipe [he/him] (Hamlet) is a 1st-year student majoring in ASL Interpreting. Tayori is from Loudoun County, VA. Tayori’s favorite role has been playing Scarecrow in The Wizard of Oz. Hope you enjoy the show!",
      group: 2,
      photoPath: "headshots/TayoriS.jpg",
      role: "Hamlet",
    },
    {
      first: "Benson",
      last: "Haley",
      position: "cast",
      crew: "cast",
      bio: "Benson Haley [he/him] (Guide) is a 3rd-year Computer Science major at RIT, and he is elated to be working with the cast of Thy Name is Woman. In years prior, he has procrastinated his classwork by playing Justice Wargrave in the RIT Players production of And Then There Were None as well as the Voice of Louis in the RIT & NTID Performing Arts production of Angels in America: Millennium Approaches. Benson blames his family, friends, and the Columbia Players for giving him the support that allowed him to end up in this production.",
      group: 3,
      photoPath: "headshots/BensonH.jpg",
      role: "Guide",
    },
    {
      first: "Alyssa",
      last: "Rzasa",
      position: "cast",
      crew: "cast",
      bio: "Alyssa Rzasa [she/her] (Ophelia) is a 2nd-year Biomedical Engineering student from New Hampshire. Some of her favorite roles include Berthe in Pippin and Megan in Puffs. She would like to thank the production team, cast, and crew for an amazing show! Have a wicked fun time!",
      group: 3,
      photoPath: "headshots/AlyssaR.jpg",
      role: "Ophelia",
    },
    {
      first: "Damien ",
      last: "Sorvillo",
      position: "cast",
      crew: "cast",
      bio: "Damien Sorvillo [they/them] (Laertes) is a 1st-year Animation major. They are from the small town of Portville, NY. Some of their previous roles include Mr. Turlly in A Christmas Carol, Cogsworth in Beauty and the Beast, Banzai in The Lion King, and Mal in The Addams Family.",
      group: 3,
      photoPath: "headshots/DamienS.jpg",
      role: "Laertes",
    },
    {
      first: "Pierre-Ilias",
      last: "Arzimanoglou",
      position: "cast",
      crew: "cast",
      bio: "Pierre-Ilias Arzimanoglou [he/him] (Polonius) is a 1st-year 3D Digital Design student. Coming from France, he is very excited for his first production in the USA! He has not acted in the past four years but is very excited to get back at it! He would like to thank his family for supporting him despite the distance, and thank the cast and crew for allowing him to participate in such a cool production! Profitez bien du spectacle! Bisous!",
      group: 3,
      photoPath: "headshots/PierreA.jpg",
      role: "Polonius",
    },
    {
      first: "Skyler",
      last: "Herman",
      position: "cast",
      crew: "cast",
      bio: "Skyler Herman [he/him] (Hamlet) is a 5th-year Software Engineering major from Montville, NJ. You may have seen him as Chuck in the RIT & NTID Performing Arts production of She Kills Monsters: Virtual Realms. Skyler is an active member of RIT Players and the Rocky Horror Club on campus. He would like to thank his friends and family for their constant support, as well as the production team for giving him the opportunity to make theatre in his last year here at RIT.",
      group: 3,
      photoPath: "headshots/SkylerH.jpg",
      role: "Hamlet",
    },
    {
      first: "Jessi",
      last: "Oppet",
      position: "cast",
      crew: "cast",
      bio: "Jessi Opett [she/her] (Original Ophelia) is a 3rd-year Film student at RIT, born and bred in Rochester, NY. She will be a dancer in RIT Players’ upcoming production of Pippin. (You can find her films on YouTube, and troll the comment section.) Congrats to the cast!",
      group: 3,
      photoPath: "headshots/JessiO.jpg",
      role: "Origional Ophelia",
    },
    {
      first: "Hugo",
      last: "Serinese",
      position: "cast",
      crew: "cast",
      bio : "Hugo Serinese (Original Hamlet) is a 4th-year New Media Interactive Design student from Williston, VT. One of his favorite roles in the past was playing Earth in Singring and the Glass Guitar. Have a great time!",
      group: 3,
      photoPath: "headshots/HugoS.jpg",
      role: "Origional Hamlet",
    },
    {
      first: "Cess",
      last: "Corona ",
      position: "crew",
      crew: "cast",
      bio : "Cess Corona (Photographer) is a 1st-year 3D Digital Design major from a small town in New Jersey. Some of their favorite productions have been The Addams Family, Elf the Musical, Mary Poppins, and Rodgers and Hmmerstein’s Cinderella. They are over the moon to be a part of such a creative and interesting production. ",
      group: 4,
      photoPath: "headshots/CessC.jpg",
      role: "Photographer",
    },
    {
      first: "Garen",
      last: "Earls",
      position: "crew",
      crew: "cast",
      bio: "Garen Earls (Photography Assistant) is a 1st-year student majoring in Game Design and Development from a small town called Titusville, PA (go Rockets!). He’ll never forget acting as Beast in Beauty and the Beast, and the love he felt around him from the cast of that show. Thanks go out to Wahkuna and Justin Earls for putting up with him, Brittany Love for making him enjoy Hamlet, and anyone else supporting this enthralling show. Have a wonderful night!",
      group: 4,
      photoPath: "headshots/GarenE.jpg",
      role: "Photography Assistant",
    },
    {
      first: "McKenzie",
      last: "Lam ",
      position: "cast",
      crew: "cast",
      bio: "McKenzie Lam (Makeup Artist) is a 2nd-year Game Design and Development major from Columbus, OH. Their favorite role was the Narrator in Puffs where they also had the chance to direct! She’d like to shout out the cast and crew for all the hard work and time put into this amazing production and their friends (especially the gibby gang) for supporting them throughout the whole process. Have fun with the show!",
      group: 4,
      photoPath: "headshots/McKenzieL.jpg",
      role: "Makeup Artist",
    },
    {
      first: "Amelie",
      last: "Ferrell",
      position: "cast",
      crew: "cast",
      bio: "Amelie Ferrell [she/her] (Stage Manager) is a 4th-year Cybersecurity student from Seattle, WA. Previously she has worked both on and off stage with her favorite productions being: Everybody, She Kills Monsters: Virtual Realms, Mamma Mia!, and Radium Girls. She would like to thank the directors, the entire SM team, the crew, and our wonderful cast for all their hard work. Thank you for watching and please enjoy the show!",
      group: 5,
      photoPath: "headshots/AmelieF.jpg",
      role: "Stage Manager",
    },
    {
      first: "Astrid",
      last: "Zambori",
      position: "cast",
      crew: "cast",
      bio: "Astrid Zambori [they/them] (Assistant Stage Manager) is a 2nd-year student finishing an associate’s degree in General Science. They will continue to work on a bachelor's degree in Biotechnology with a minor in Theatre Design and Stagecraft. They are an expanding jack of trades, having been an actor in various works such as Spongebob: The Musical and are now coming to the techy side of theatre! They are supported in this journey by their lovely on-campus cat, Tiger. (Tiger says “purr”.) Astrid and Tiger hope you enjoy the show! ",
      group: 5,
      photoPath: "headshots/AstridZ.jpg",
      role: "Assistant Stage Manager",
    },
    {
      first: "Lucy",
      last: "Herbold",
      position: "cast",
      crew: "cast",
      bio: "Lucy Herbold [she/her] (Stage Manager) is a 3rd-year student majoring in Game Design and Development. She comes from Glendale, AZ, and this is her first time working as a stage manager. Past experience includes crewing in high school (backstage, lighting, props, set construction, being forbidden from touching power tools, etc.). Enjoy the show :3",
      group: 5,
      photoPath: "headshots/LucyH.jpg",
      role: "Stage Manager",
    },
    {
      first: "Lyla",
      last: "Benesh",
      position: "cast",
      crew: "cast",
      bio: "Lyla Benesh [she/her] (Assistant Stage Manager) is a 1st-year Physics major from Rowley, MA. Having worked both on stage and behind the scenes, Lyla’s favorite roles include being the stage manager for The Addams Family and playing the role of Bob in Lights, Camera, Murder! Enjoy the show :)",
      group: 5,
      photoPath: "headshots/LylaB.jpg",
      role: "Assistant Stage Manager",
    },
    {
      first: "Mac",
      last: "Leong",
      position: "cast",
      crew: "cast",
      bio: "McClain “Mac” Leong [they/them] (Head of Stage Managers) is a 3rd-year SOIS student studying “Using Theater for Social Change.” From Sterling, VA, Mac’s favorite role is between this HSM role and SM for the RIT & NTID Performing Arts production of Everybody. They’d like to thank the cast, the directors, and their incredible stage management team for putting up with all the long emails. Shoutout to their mom and Becca! Enjoy the show!",
      group: 5,
      photoPath: "headshots/McClainL.jpg",
      role: "Head of Stage Managers",
    },
  ];
  