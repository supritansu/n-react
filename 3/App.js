import React from "react";
import ReactDOM from "react-dom";
const component = <div id>This is nothing new </div>
const JsxHeading = () => <h1 className="Head">This will be shown outside</h1>
//We can inject a element and a component inside another component and show types of component entry
const Outside = () => (
    <div id="container">
        {component}
        {100 + 200}
        <JsxHeading />
        {JsxHeading}
        <JsxHeading></JsxHeading>
        <h2>This will be below</h2>
    </div>

)
const logoElement = (
    <div className="logo">
        <img src="logo.png" alt="Logo" />
    </div>
);
const searchBarElement =
    (<div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
    </div>
    );
const userIconElement =
    (
        <div className="user-icon">
            <img src="user-icon.png" alt="User Icon" />
        </div>
    );

const Header = () =>

(
    <div id="header">

        {logoElement}
        {searchBarElement}
        {userIconElement}

        {/* Other content of your application */}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);