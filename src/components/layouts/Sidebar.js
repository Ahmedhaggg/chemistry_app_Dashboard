import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return <div className="bg-main-color">
        <p className="fs-4 ps-3 pt-5 text-white-color">chemistry</p>
        <nav className="h-100 flex-column align-items-stretch ps-2">
            <nav className="nav nav-pills flex-column">
                <Link className="nav-link text-white-color" to="/grades">Dashboard</Link>
                <Link className="nav-link text-white-color" to="/grades">grades</Link>
                <Link className="nav-link text-white-color" to="/courses">courses</Link>
                <Link className="nav-link text-white-color" to="#item-3">courses units</Link>
                <nav className="nav nav-pills flex-column">
                    <Link className="nav-link text-white-color ms-3 my-1" to="/units/lessons">lessons</Link>
                    <Link className="nav-link text-white-color ms-3 my-1" to="/units/revisions">revisions</Link>
                    <Link className="nav-link text-white-color ms-3 my-1" to="/units/revisions">exam</Link>
                </nav>
                <Link className="nav-link text-white-color" to="/courses">courses revisions</Link>
                <Link className="nav-link text-white-color" to="#item-3">students</Link>
                <nav className="nav nav-pills flex-column">
                    <Link className="nav-link text-white-color ms-3 my-1" to="/students">accepted students</Link>
                    <Link className="nav-link text-white-color ms-3 my-1" to="/non-accepted/students">non accepted students</Link>
                </nav>
            </nav>
        </nav>
    </div>;
}
