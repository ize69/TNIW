// TopSection.tsx
import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

function TopSection() {
  return (
    <header>
      <header>
        <h1>Welcome to the Thy Name Is Woman</h1>
      </header>
      <nav>
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
      </nav>
    </header>
  );
}

export default TopSection;
