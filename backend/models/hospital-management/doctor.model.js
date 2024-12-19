import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
            min: [0, "Salary must be a positive number"],
        },
        speciality: {
            type: String,
            enum: ["General", "Dermatology", "Gynecology", "Dentist", "Cardiologists"],
            default: "General",
            required: true,
        },
        qualificationInYears: {
            type: Number,
            default: 0,
            min: [0, "Qualification years must be a positive number"],
        },
    },
    { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
