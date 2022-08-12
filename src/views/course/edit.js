import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import PageLoading from "../../components/PageLoading";
import SectionHeader from "../../components/SectionHeader";
import { useGetCourseQuery, useUpdateCourseMutation } from "../../store/courseSlice"

export default function EditCourse() {
    let { id } = useParams()
    let [redirect, setRedirect] = useState(false);
    let { data, isSuccess, isLoading } = useGetCourseQuery(id);
    let [updateCourse, updateCourseResult] = useUpdateCourseMutation();
    useEffect(() => console.log("data", data, id, isLoading, isSuccess), [data])
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    let submitHandler = (newCourseData) => {
        updateCourse({ courseId: id, newCourseData })
    }

    useEffect(() => {
        let timeout;
        if (updateCourseResult.isSuccess) {
            timeout = setTimeout(() => { setRedirect(true) }, 2000);
        }
        return () => clearTimeout(timeout);

    }, [updateCourseResult]);

    return (
        isLoading ?
            <PageLoading />
            :
            isSuccess ?
                <>
                    <div className="dashboard-section">
                        <SectionHeader text="update course" />
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <form onSubmit={handleSubmit(submitHandler)}>
                                    <input className={`form-control form-control-lg mb-3 ${errors.name ? 'border-danger' : ''}`} type="text"
                                        placeholder="name" aria-label="name"
                                        {...register("name", { required: true })}
                                        defaultValue={data.course.name}
                                    />

                                    {
                                        updateCourseResult.error?.data?.error?.errors?.name ?
                                            <div className="alert alert-danger">{updateCourseResult.error.data.error.errors.name}</div> : null
                                    }

                                    <div className="text-center">
                                        {
                                            updateCourseResult.error?.data?.error?.errorName === "updateError" ?
                                                <p className="alert alert-danger">{updateCourseResult.error.data.error.message}</p>
                                                : null
                                        }
                                        {
                                            updateCourseResult.data ?
                                                <p className="alert alert-success">{updateCourseResult.data.message}</p>
                                                : null
                                        }
                                        <button type="submit" className="btn btn-primary btn-lg">update course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {redirect && <Navigate to="/courses" />}
                </>
                :
                <Navigate to="/404" />
    )
}