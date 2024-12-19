import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({
    patientName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    admitDate: {
        type: Date,
        required: true,
    },
    dischargeDate: {
        type: Date,
    },
    doctorAssigned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
    ],
    billAmount: {
        type: Number,
        min: [0, "Bill amount can't be negative."],
    },
});

// Create a unique compound index
medicalRecordSchema.index({ patientName: 1, admitDate: 1 }, { unique: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

