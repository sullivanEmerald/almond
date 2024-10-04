import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    cloudinaryId: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    isAvailale: {
        type: Boolean,
        Default: true,
    },

    likes: {
        type: Number,
        default: 0
    },

    views: {
        type: Number,
        default: 0
    },

    qty: {
        type: Number,
        default: 0
    }

})

const productModel = mongoose.model('Item', productSchema);


export default productModel;