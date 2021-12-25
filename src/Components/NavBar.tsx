import React from "react";

export const NavBar: React.FC = (props) =>{
    return (
        <div className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </div>
    );
}