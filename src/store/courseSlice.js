import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const courseSelice = createApi({
    reducerPath: "courseSlice",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    tagTypes: ["Course"],
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => {
                return {
                    url: "courses",
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        getCourse: builder.query({
            query: (id) => {
                return {
                    url: `courses/${id}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            },
            providesTags: ["Course"]
        }),
        createCourse: builder.mutation({
            query: newCourseData => {
                return ({
                    method: "POST",
                    url: "courses",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newCourseData)
                })
            }
        }),
        updateCourse: builder.mutation({
            query: ({ courseId, newCourseData }) => {
                return ({
                    url: `courses/${courseId}`,
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newCourseData)
                })
            }
        })
    })
});

export const { useGetAllCoursesQuery, useGetCourseQuery, useCreateCourseMutation, useUpdateCourseMutation } = courseSelice;