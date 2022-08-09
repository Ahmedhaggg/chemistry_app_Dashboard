import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "../services/storage";

export const unitRevisionSlice = createApi({
    reducerPath: "unitRevisionSlice",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/units/` }),
    endpoints: (builder) => ({
        getUnitRevisions: builder.query({
            query: (unitId) => {
                return {
                    url: `${unitId}/revisions`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        getUnitRevision: builder.query({
            query: (unitId, revisionId) => {
                return {
                    url: `${unitId}/revisions/${revisionId}`,
                    method: "GET",
                    headers: {
                        'authorization': getToken()
                    }
                }
            }
        }),
        createUnitRevision: builder.mutation({
            query: (unitId, newRevisionId) => {
                return ({
                    url: `${unitId}/revisions`,
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newRevisionId)
                })
            }
        }),
        updateUnitRevision: builder.mutation({
            query: (unitId, revisionId, newRevisionData) => {
                return ({
                    method: "PUT",
                    url: `${unitId}/revisions/${revisionId}`,
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

export const { useGetCourseUnitsQuery, useGetUnitQuery, useCreateUnitMutation, useUpdateUnitMutation } = unitRevisionSlice;