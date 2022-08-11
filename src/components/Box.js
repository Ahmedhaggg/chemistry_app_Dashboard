import React from "react";

export default function Box({ text, iconClass }) {
    return <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
        <div className="text-decoration-none box bg-light w-100 d-flex aligin-item-center justify-content-center align-items-center">
            <div>
                <i className={`text-second-color ${iconClass} fs-2`}></i>
                <p className="text-black-color mt-2">{text}</p>
            </div>
        </div>
    </div>;
}
