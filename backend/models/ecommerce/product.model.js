import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        inStock: {
            type: Boolean,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        seller: {
            type: String,
            minlength: 4,
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
