import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Top.css";

export const HeaderMenuItem = ({ buttonName, items = [], links = [], buttonNameLink }) => {
    // サブメニューが存在するかどうかを判定
    const hasSubmenu = items.length > 0;

    return (
        <li className={`nav-item ${hasSubmenu ? 'has-submenu' : ''}`}>
            <Link to={buttonNameLink} className="nav-link">{buttonName}</Link>
            {hasSubmenu && (
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
