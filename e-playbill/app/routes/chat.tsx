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
      <script>
        {`
          var remark_config = {
            host: '172.0.0.1',
            site_id: 'remark',
          };
          
        `}
      </script>
      <script>
        {'!function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);'}
      </script>
      <div id="remark42"></div>
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
