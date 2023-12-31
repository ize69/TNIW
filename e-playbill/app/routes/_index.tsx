import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/index.css";
import TopSection from "./TopSection";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      {/* Additional content specific to the Index page */}
    </div>
  );
}
