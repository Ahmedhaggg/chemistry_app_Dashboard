import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 px-1 h-100 bg-main-color position-fixed" id="sticky-sidebar">
                    <Sidebar />
                </div>
                <div className="col offset-3" id="main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
    // return <div className="d-flex">
    //     <div className="sidebar-container d-none d-lg-block">
    //         <Sidebar />
    //     </div>
    //     <div className="content">
    //         <Outlet />
    //     </div>
    // </div>;
}
