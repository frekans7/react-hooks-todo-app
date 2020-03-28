import React from "react";

const Store = React.createContext({
  todos: [
    "Learn HTML and CSS",
    "Learn JavaScript(ES6+)",
    "Design with Figma",
    "Develop applications with 'React' and 'Material-UI'"
  ],
  myTheme: "light"
});

export default Store;
