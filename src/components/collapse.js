import React, { useState } from "react";
import "../styles/collapse.scss";


export const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapseContainer">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span>{isOpen ? "▼" : "▲"}</span>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    <p>{content}</p>
                </div>

            )}
        </div>
    )
}
