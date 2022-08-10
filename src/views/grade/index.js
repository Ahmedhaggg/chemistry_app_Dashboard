import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import PageLoading from "../../components/PageLoading";
import SectionHeader from "../../components/SectionHeader";
import { useGetAllGradesQuery } from "../../store/gradeSlice"
export default function Grades() {

    const { data, isLoading, isSuccess } = useGetAllGradesQuery();
    useEffect(() => console.log(data), [data])
    return <>
        {
            isLoading ? <PageLoading /> : <>
                {isSuccess ?
                    <div className="dashboard-section">
                        <SectionHeader text="Dashboard" />
                        <table className="table bg-white">
                            <thead className="bg-second-color text-light">
                                <tr className="text-center">
                                    <th>name</th>
                                    <th>current course</th>
                                    <th>number of students</th>
                                    <th>update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.grades.map(grade => (
                                    <tr className="text-center">
                                        <td data-title="grade" className="fs-6">{grade.name}</td>
                                        <td data-title="Last Name">{grade.currentCourse.name}</td>
                                        <td data-title="Last Name">{grade.numberOfStudents}</td>
                                        <td data-title="Last Name">
                                            <Link to={"/grades/" + grade._id} className="text-decoration-none">
                                                update
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    : <Navigate to="505" />
                }
            </>
        }
    </>
}
