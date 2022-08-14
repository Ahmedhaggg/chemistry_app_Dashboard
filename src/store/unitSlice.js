import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const unitSlice = createApi({
    reducerPath: "unitSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/courses/` }),
    tagTypes: ["Unit"],
    endpoints: (builder) => ({
        getCourseUnits: builder.query({
            query: (courseId) => {
                return {
                    url: `${courseId}/units`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            },
        }),
        getUnit: builder.query({
            query: ({ courseId, unitId }) => {
                return {
                    url: `${courseId}/units/${unitId}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            },
            providesTags: ["Unit"]
        }),
        createUnit: builder.mutation({
            query: ({ courseId, newUnitData }) => {
                return ({
                    url: `${courseId}/units`,
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newUnitData)
                })
            }
        }),
        updateUnit: builder.mutation({
            query: ({ courseId, unitId, newUnitData }) => {
                return ({
                    method: "PUT",
                    url: `${courseId}/units/${unitId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newUnitData)
                })
            },
            invalidatesTags: ["Unit"]
        }),
        getNextUnitArrangement: builder.query({
            query: (id) => {
                return {
                    url: `${id}/units/next-arrangement`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        })
    })
});

export const { useGetCourseUnitsQuery, useGetUnitQuery, useCreateUnitMutation, useUpdateUnitMutation, useGetNextUnitArrangementQuery } = unitSlice;