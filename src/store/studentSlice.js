import { getToken } from '../services/storage'
import { apiSlice } from './apiSlice'

export const studentSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createStudent: builder.mutation({
            query: newStudentData => {
                return ({
                    method: "POST",
                    url: "students",
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getToken()
                    },
                    body: JSON.stringify(newStudentData)
                })
            },
            invalidatesTags: ["Student"]
        }),
    })
})
export const { useCreateStudentMutation } = studentSlice
