import React, { useState } from "react";
import TopSection from "./TopSection";
import {PeopleFilter} from "./info-sections/PeopleFilter";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];
  
function Info() {
  //renders the info page
  //rerenders the info page when the role changes
  console.log("Info component re-rendered");
  const [role, setRole] = React.useState("crew");
  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      {/* Additional content specific to the Info page */}
      {/*<CastSection />*/}
      {/*<CrewSection />*/}
      {/*<PeopleFilter />*/}
      <PeopleFilter role={role} setRole={setRole} />
      
    </div>
  );
}
export default Info;