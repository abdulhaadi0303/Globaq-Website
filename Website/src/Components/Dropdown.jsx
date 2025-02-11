import { Link, useNavigate } from "react-router-dom";
import "./styles/Dropdown.css";
import { useState } from "react";
import dropdownData from "./data.jsx";

function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (item.route) {
            navigate(`/${item.route}`); // Navigate to the route if it exists
        }
    };

    return (
        <div
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="dropdown-title">{title}</span> {/* Title/Label */}
            {isOpen && (
                <div className="dropdown-content">
                    {items.map((item, index) => (
                        <div key={index} className="dropdown-item">
                            {item.subItems ? (
                                <div>
                                    <span
                                        onClick={() => handleClick(item)}
                                        style={{ cursor: item.route ? "pointer" : "default" }}
                                    >
                                        {item.label}
                                    </span>
                                    <Dropdown title="" items={item.subItems} />
                                </div>
                            ) : (
                                <span
                                    onClick={() => handleClick(item)}
                                    style={{ cursor: item.route ? "pointer" : "default" }}
                                >
                                    {item.label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function DropDown() {
    return (
        <div className="header-bar-3">
            <nav>
                <Link to="/">Home</Link>
                {dropdownData.map((dropdown, index) => (
                    <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
                ))}
                <Link to="/AboutUs">About US</Link>
            </nav>
        </div>
    );
}

export default DropDown;