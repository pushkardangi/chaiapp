import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    Quantity: {
        type: Number,
        default: 1,
    },
});

const addressSchema = new mongoose.Schema({
    houseNumber: Number,
    street: {
        type: String,
        required: true,
        lowercase: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
        lowercase: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
    },
    country: {
        type: String,
        required: true,
        default: "India",
    },
});

const orderSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId, // Referencing Schema (User)
            ref: "User",
        },
        orderItems: {
            type: [orderItemSchema], // Embedding Schema (orderItemSchema)
        },
        address: { addressSchema },
        status: {
            type: String,
            enum: ["Ordered", "Dispatched", "Out for delilvery", "Delivered"],
            default: "Ordered",
            required: true,
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
