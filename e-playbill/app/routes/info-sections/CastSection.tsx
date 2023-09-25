// cast.tsx
// defines the cast section of the info page
import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import "~/styles/infoSections.css";
import stylesUrl from "~/styles/infoSections.css";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl },];

function CastSection() {
  return (
    <div>
      <h2>Cast</h2>
      <p>Cast info</p>
    </div>
  );
}

export default CastSection;
