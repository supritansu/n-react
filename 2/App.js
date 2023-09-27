import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", { id: "parent" },
    [React.createElement("h1", { id: "children" }, [
        React.createElement("h2", { id: "gchild" }, ["we are grandchildren"]), React.createElement("h2", { id: "gchild" }, ["we are grandchildren"])
    ]), React.createElement("h1", { id: "children" },
        [React.createElement("h2", { id: "gchild" }, ["we are grandchildren"]), React.createElement("h2", { id: "gchild" }, ["we are grandchildren"])])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);