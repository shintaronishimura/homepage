import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Top.css";

export const HeaderMenuItem = ({ buttonName, items = [], links = [], buttonNameLink }) => {
    return (
        <li className="nav-item">
            <Link to={buttonNameLink} className="nav-link">{buttonName}</Link>
            {items.length > 0 && (
                <ul className="submenu">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={links[index] || "#"}>{item}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
