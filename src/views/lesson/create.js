import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import { useCreateLessonMutation, useGetLessonQuery, useGetNextLessontArrangementQuery } from "../../store/lessonSlice";
import PageLoading from "../../components/PageLoading";
import SectionHeader from "../../components/SectionHeader";
export default function CreateLesson() {
    let [redirect, setRedirect] = useState(false);
    let { courseId, unitId } = useParams()
    let getNextLessonArrangement = useGetNextLessontArrangementQuery(unitId);
    let [createLesson, createLessonResult] = useCreateLessonMutation();
    let { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        let timeout;
        if (createLessonResult.isSuccess) {
            timeout = setTimeout(() => { setRedirect(true) }, 2000);
        }
        return () => clearTimeout(timeout);

    }, [createLessonResult]);


    let submitHandler = (newLessonData) => {
        console.log(newLessonData)
        createLesson({
            unitId,
            newLessonData: {
                arrangement: getNextLessonArrangement.data.nextLessonArrangement,
                ...newLessonData
            }
        })
    }

    return (
        getNextLessonArrangement.isLoading ? <PageLoading />
            : !getNextLessonArrangement.isSuccess ? <Navigate to="/505" />
                :
                <>
                    <div className="dashboard-section">
                        <SectionHeader text="add lesson to unit " />
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <form onSubmit={handleSubmit(submitHandler)}>
                                    <input className={`form-control form-control-lg mb-3 ${errors.name ? 'border-danger' : ''}`} type="text"
                                        placeholder="name" aria-label="name"
                                        {...register("name", { required: true })}
                                    />

                                    {
                                        createLessonResult.error?.data?.error?.errors?.name ?
                                            <div className="alert alert-danger">{createLessonResult.error.data.error.errors.name}</div> : null
                                    }

                                    {/* <input className={`form-control form-control-lg mb-3 ${errors.description ? 'border-danger' : ''}`} type="text"
                                        placeholder="description" aria-label="description"
                                        {...register("description", { required: true })}
                                    /> */}
                                    <textarea
                                        className={`form-control form-control-lg mb-3 ${errors.description ? 'border-danger' : ''}`}
                                        placeholder="description" aria-label="description"
                                        {...register("description", { required: true })}
                                    />
                                    {
                                        createLessonResult.error?.data?.error?.errors?.video ?
                                            <div className="alert alert-danger">{createLessonResult.error.data.error.errors.video}</div> : null
                                    }

                                    <input className={`form-control form-control-lg mb-3 ${errors.video ? 'border-danger' : ''}`} type="text"
                                        placeholder="video" aria-label="video"
                                        {...register("video", { required: true })}
                                    />

                                    {
                                        createLessonResult.error?.data?.error?.errors?.video ?
                                            <div className="alert alert-danger">{createLessonResult.error.data.error.errors.video}</div> : null
                                    }

                                    <div className="text-center">
                                        {
                                            createLessonResult.data ?
                                                <p className="alert alert-success">{createLessonResult.data.message}</p>
                                                : null
                                        }
                                        <button type="submit" className="btn btn-primary btn-lg">create course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {redirect && <Navigate to={"/courses/" + courseId} />}
                </>
    )
}
