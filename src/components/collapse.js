import React, { useState } from "react";
import "../styles/collapse.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span className="collapse-icon">
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};





