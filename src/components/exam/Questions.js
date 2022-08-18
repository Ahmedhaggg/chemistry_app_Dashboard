import React, { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function Questions({ register, control, errors }) {
    // const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "questions"
    });
    useEffect(() => append(), [])
    return (
        <>
            <div>
                {fields.map((item, index) => (
                    <div key={item.id} className="mb-3">
                        <input
                            className={`form-control form-control-lg mb-3 ${errors[index]?.question ? 'border-danger' : ''}`} type="text"
                            placeholder="question" aria-label="question"
                            {...register(`questions[${index}][question]`, { required: true })}
                        />
                        <div className="ps-3">
                            {
                                Array.from(Array(4), (element, i) => (
                                    <input
                                        key={i}
                                        className={`form-control form-control-lg mb-3 ps-4 ${errors[index]?.answers[i] ? 'border-danger' : ''}`} type="text"
                                        placeholder="question" aria-label="question"
                                        {...register(`questions[${index}][answers][${i}]`, { required: true })}
                                    />
                                ))
                            }
                        </div>
                        <input
                            className={`form-control form-control-lg mb-3 ${errors.question ? 'border-danger' : ''}`} type="text"
                            placeholder="correct answer" aria-label="correct answer"
                            {...register(`questions[${index}][correctAnswer]`, { required: true })}
                        />
                        <div className="text-center">
                            <button className="btn btn-danger" type="button" onClick={() => remove(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={() => append()}
                className="btn btn-primary mb-3"
            >
                add new question
            </button>
        </>
    );
}