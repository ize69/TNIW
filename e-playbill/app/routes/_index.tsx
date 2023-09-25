import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routing

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="navigation">
      <header>
        <h1>Welcome to the show</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <div>
        <button>info</button>
        <button>chat</button>
      </div>
    </div>
  );
}
