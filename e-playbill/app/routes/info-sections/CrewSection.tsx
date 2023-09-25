// CrewSection.tsx
// defines the cast section of the info page
import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/info-sections.css";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl },];

function CrewSection() {

    return (
        <div>
        <h2>Crew</h2>
        <p>Crew info</p>
        </div>
    );
    }

export default CrewSection;

