import Home from "./Home";

// The original switchPage() renders identical markup for 'home' and 'latest'
// (see reference/original.html line 281: `if (page === 'home' || page === 'latest')`).
// Preserved here as a thin alias rather than duplicating markup.
export default function Latest(props) {
  return <Home {...props} />;
}
