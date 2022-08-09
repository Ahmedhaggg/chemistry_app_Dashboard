import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layout() {
    return <div className="main-container d-flex">
        <div className="sidebar bg-primary">
            <Sidebar />
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>;
}
