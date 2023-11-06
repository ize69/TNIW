import React, { useEffect } from "react";
import TopSection from "./TopSection"; // Import the TopSection component
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function Chat() {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        const remarkConfigScript = document.createElement("script");
        remarkConfigScript.textContent = `
          var remark_config = {
            host: '172.0.0.1',
            site_id: 'remark',
          };
        `;
        document.body.appendChild(remarkConfigScript);

        const remarkScripts = document.createElement("script");
        remarkScripts.textContent = `
          !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);
        `;
        document.body.appendChild(remarkScripts);

        return () => {
          document.body.removeChild(remarkConfigScript);
          document.body.removeChild(remarkScripts);
        };
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();

    // Clean up function will be called on component unmount
    return () => {
      // Clean up code here
    };
  }, []);

  return (
    <div>
      <TopSection /> {/* Use the TopSection component */}
      <div id="remark42"></div>
    </div>
  );
}
