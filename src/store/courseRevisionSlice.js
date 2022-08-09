import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const courseRevisionSlice = createApi({
    reducerPath: "courseRevisionSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/courses/` }),
    endpoints: (builder) => ({
        getCourseRevisions: builder.query({
            query: (courseId) => {
                return {
                    url: `${courseId}/revisions`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        getCourseRevision: builder.query({
            query: (courseId, revisionId) => {
                return {
                    url: `${courseId}/revisions/${revisionId}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        createCourseRevision: builder.mutation({
            query: (courseId, newRevisionId) => {
                return ({
                    url: `${courseId}/revisions`,
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newRevisionId)
                })
            }
        }),
        updateCourseRevision: builder.mutation({
            query: (courseId, revisionId, newRevisionData) => {
                return ({
                    method: "PUT",
                    url: `${courseId}/revisions/${revisionId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newRevisionData)
                })
            }
        })
    })
});

export const { useGetCourseCoursesQuery, useGetCourseQuery, useCreateCourseMutation, useUpdateCourseMutation } = courseRevisionSlice;