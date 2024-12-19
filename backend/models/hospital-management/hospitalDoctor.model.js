import mongoose from "mongoose";

const hospitalDoctorSchema = new mongoose.Schema(
    {
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        workingHours: {
            type: Number,
            default: null,
        },
        hourlyRate:{
            type: Number,
            default: 300,
            min: [300, "Hourly rate can't be less than 300"]
        }
    },
    { timestamps: true }
);

export const HospitalDoctor = mongoose.model("HospitalDoctor", hospitalDoctorSchema);
