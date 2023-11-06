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
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.textContent = `
      var remark_config = {
        host: '172.0.0.1',
        site_id: 'remark',
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = `
      !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    }
  }, []);

  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      <div id="remark42"></div>
    </div>
  );
}