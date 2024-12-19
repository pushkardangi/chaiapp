import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        patientId: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
            min: [0, "Age must be at least 0."],
            max: [200, "Age cannot exceed 200."],
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
