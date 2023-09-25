import React from "react";
import TopSection from "./TopSection";
import CastSection from "./info-sections/CastSection";
import CrewSection from "./info-sections/CrewSection";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];
  
export default function Info() {
  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      {/* Additional content specific to the Info page */}
      <CastSection />

      <CrewSection />
    </div>
  );
}
