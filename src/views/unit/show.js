import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Box from "../../components/Box";
import PageLoading from "../../components/PageLoading";
import SectionHeader from "../../components/SectionHeader";
import { useGetUnitQuery } from "../../store/unitSlice";
import CustomTable from "../../components/CustomTable";

export default function Unit() {
    let { courseId, unitId } = useParams();
    let { data, isLoading, isSuccess } = useGetUnitQuery({ courseId, unitId });


    return (
        isLoading ? <PageLoading />
            : !isSuccess ? <Navigate to="/404" />
                : (
                    <div className="dashboard-section">
                        <SectionHeader text="unit" />
                        <div className="row justify-content-center">
                            <Box text="units" number={data.unit.numberOfLessons} bgColor="bg-second-color" />
                            <Box text="revisions" number={data.unit.numberOfRevisions} bgColor="bg-success" />
                        </div>
                        <div>
                            <p className="text-second-color fs-3 mt-3">lessons</p>
                            {
                                data.unit.lessons.length === 0 ?
                                    <p className="alert alert-info w-50 mx-auto">no match lessons</p>
                                    :
                                    <CustomTable
                                        redirectPath={"/courses/" + courseId + "/units/" + unitId + "/lessons/"}
                                        data={data.unit.lessons}
                                        linkItems={["name"]}
                                    />
                            }
                        </div>
                        <div>
                            <p className="text-second-color fs-3 mt-3">revisions</p>
                            {
                                data.unit.revisions.length === 0 ?
                                    <p className="alert alert-info w-50 mx-auto">no match revisions</p>
                                    :
                                    <CustomTable redirectPath={"/courses/" + courseId + "/units/" + unitId + "/revisions/"} data={data.unit.revisions} linkItems={["name"]} />
                            }
                        </div>
                    </div>

                )
    );
}
