// TopSection.tsx
import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

function TopSection() {
  return (
    <div className="navigation">
      <header>
        <h1>Welcome to the show</h1>
      </header>
      <main>{/* Content for the top section, if needed */}</main>
      <div>
        <button>
            <Link to="/info" className="link">
                info
            </Link>
        </button>
        <button>
            <Link to="/chat" className="link">
                chat
            </Link>
        </button>
      </div>
    </div>
  );
}

export default TopSection;
