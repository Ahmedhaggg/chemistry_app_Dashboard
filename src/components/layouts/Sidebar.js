import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return <div className="sidebar position-fixed h-100 top-0 start-0 d-none d-lg-block bg-main-color">
        <p className="fs-3 ps-3 pt-4 text-white-color">chemistry</p>
        <nav className="h-100 flex-column align-items-stretch border-end">
            <nav className="nav nav-pills flex-column">
                <Link className="nav-link text-white-color" to="/admin/grades">students</Link>
                <nav className="nav nav-pills flex-column">
                    <Link className="nav-link text-white-color ms-3 my-1" to="/admin/students/"></Link>
                    <Link className="nav-link text-white-color ms-3 my-1" to="#item-1-2">Item 1-2</Link>
                </nav>
                <Link className="nav-link text-white-color" to="#item-2">Item 2</Link>
                <Link className="nav-link text-white-color" to="#item-3">Item 3</Link>
                <nav className="nav nav-pills flex-column">
                    <Link className="nav-link text-white-color ms-3 my-1" to="#item-3-1">Item 3-1</Link>
                    <Link className="nav-link text-white-color ms-3 my-1" to="#item-3-2">Item 3-2</Link>
                </nav>
            </nav>
        </nav>
    </div>;
}
