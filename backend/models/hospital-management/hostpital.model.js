import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            uppercase: true,
        },
        specializedIn: {
            type: String,
            enum: ["General", "Dermatology", "Gynecology", "Dentist", "Cardiologists"],
            default: "General",
        },
        capacityOfPatients: {
            type: Number,
            min: [0, "Capacity must be Positive."],
            required: true,
        },
        medicalStaffCount: {
            type: Number,
            min: [0, "Medical staff count must be Positive."],
            required: true,
        },
        hasBloodBank: {
            type: Boolean,
            default: false,
        },
        ambulanceCount: {
            type: Number,
            default: 0,
            min: [0, "Ambulance count must be Positive."],
            required: true,
        },

    },
    { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
