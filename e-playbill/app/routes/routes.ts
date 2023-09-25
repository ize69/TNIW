import { LoaderFunction } from "@remix-run/node";

// Define your loader function for the "info" route
export let loader: LoaderFunction = async () => {
  return { props: {} };
};

// Export your routes
export let routes = {
  // Your other routes...
  "/info": loader, "/chat": loader
};
