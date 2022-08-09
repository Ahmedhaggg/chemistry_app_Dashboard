import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const lessonSlice = createApi({
    reducerPath: "lessonSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/units/` }),
    endpoints: (builder) => ({
        getUnitLessons: builder.query({
            query: (unitId) => {
                return {
                    url: `${unitId}/lessons`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        getLesson: builder.query({
            query: (unitId, lessonId) => {
                return {
                    url: `${unitId}/lessons/${lessonId}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        createLesson: builder.mutation({
            query: (unitId, newLessonData) => {
                return ({
                    url: `${unitId}/lessons`,
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newLessonData)
                })
            }
        }),
        updateLesson: builder.mutation({
            query: (unitId, lessonId, newLessonData) => {
                return ({
                    method: "PUT",
                    url: `${unitId}/lessons/${lessonId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newLessonData)
                })
            }
        })
    })
});

export const { useGetUnitLessonsQuery, useGetLessonQuery, useCreateLessonMutation, useUpdateLessonMutation } = lessonSlice;