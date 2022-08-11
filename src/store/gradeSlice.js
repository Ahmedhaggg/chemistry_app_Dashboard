import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const gradeSlice = createApi({
    reducerPath: "gradeSlice",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getAllGrades: builder.query({
            query: () => {
                return {
                    url: "grades",
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        getGrade: builder.query({
            query: (id) => {
                return {
                    url: `grades/${id}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        createGrade: builder.mutation({
            query: newGradeData => {
                return ({
                    method: "POST",
                    url: "grades",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newGradeData)
                })
            }
        }),
        updateGrade: builder.mutation({
            query: (data) => {
                return ({
                    method: "PUT",
                    url: `grades/${data.gradeId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(data.newGradeData)
                })
            }
        })
    })
});

export const { useCreateGradeMutation, useGetGradeQuery, useGetAllGradesQuery, useUpdateGradeMutation } = gradeSlice;