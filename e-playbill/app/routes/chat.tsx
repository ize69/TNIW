import React, { useState, useEffect } from "react";
import TopSection from "./TopSection"; // Import the TopSection component
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Chat() {
  const [serverFound, setServerFound] = useState(true); // Initially assume the server is found

  useEffect(() => {
    //TODO: make a request to the remark42 server to see if it is accessible once a remark42 server is available
    // Perform a check to see if the server is accessible
    // You can make an HTTP request or perform any necessary check here
    // If the server is not found, setServerFound(false);
    // Example:
    // fetch("https://your-remark42-server-url")
    //   .then((response) => {
    //     if (!response.ok) {
    //       setServerFound(false);
    //     }
    //   })
    //   .catch(() => {
    //     setServerFound(false);
    //   });
  }, []);

  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      {serverFound ? (
        // Render your chat content when the server is found
        <div>
          {/* Additional content specific to the Chat page that will call the remark42 microblogging server */}
        </div>
      ) : (
        // Render an error message when the server is not found
        
        <div>
          <p className="error">Error: The server is not accessible.</p>
        </div>
      )}
    </div>
  );
}
