import React, { useState, useEffect } from "react";

import { List } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarInventoolyWebsite() {
    const history = useHistory();
    const [navbarcollapse, setNavbarcollapse] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const mobilenavbar = () => {
        if (navbarcollapse) {
            setNavbarcollapse(false);
        } else {
            setNavbarcollapse(true);
        }
    };
    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });
    return (
        <nav
            className={`navbar fixed-top navbar-fixed-top navbar-expand-lg bg-transparent  ${navbar ? "scrolled" : ""}`}
        >
            <div className="container">
                <a
                    className="navbar-brand navigationBrand"
                    href="/home"
                    style={{
                        fontSize: "30px ",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        color: "#012970 ",
                        fontFamily: "Nunito, sans-serif",
                        marginTop: "0px",
                        padding: "0px",
                    }}
                >
                    Smart Laptop Store
                </a>
                <button
                    className="navbar-toggler"
                    style={{ border: "2px solid #012970" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => mobilenavbar()}
                >
                    <List style={{ color: "#012970" }} />
                </button>

                <div
                    className={`navigationItems navbar-collapse ${navbarcollapse ? "" : "collapse"
                        }`}
                    style={{ fontSize: " 18px", color: "#4154f1" }}
                    id="navbarSupportedContent"
                >
                    <ul
                        className="navbar-nav ms-auto mb-2 mb-lg-0"
                        style={{
                            justifyContent: "space-between",
                            marginLeft: "auto",
                            width: "100%",
                        }}
                    >
                        <div
                            className="leftMenuItems"
                            style={{ display: "flex", paddingLeft: " 30px " }}
                        >




                        </div>

                        <div className="middleMenuItems" style={{ display: "flex" }}>
                            <li
                                className="nav-item li-Nav"
                                style={{ padding: "0 15px 0 15px" }}
                            >
                                <a></a>
                            </li>
                            <li
                                className="nav-item li-Nav"
                                style={{ alignItems: "right", paddingLeft: "15px" }}
                            >
                                <a href="http://localhost:6565"
                                    className="nav-link"

                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        fontFamily: "Nunito, sans-serif",
                                        fontWeight: "400",
                                        whiteSpace: "nowrap",
                                        transition: "0.3s",
                                        color: "#fff",
                                        backgroundColor: "#4154f1",
                                        // padding: "10px 0 10px 0px",
                                        fontSize: "1rem",
                                        borderRadius: ".25rem",
                                        paddingLeft: "20px",
                                        paddingRight: "20px",
                                    }}
                                >
                                    Visit Our Product
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarInventoolyWebsite;