import productModel from "../model/product.js";
import ResponseUtils from "../../utils/response.js";

export const getAllProducts = async (req, res) => {
    try {
        // Fetch all products
        const allProducts = await productModel.find().lean();

        console.log(allProducts);


        if (!allProducts.length) {
            return ResponseUtils.successResponse(res, 'No products available at the moment', 200, []);
        }


        return ResponseUtils.successResponse(res, 'Products fetched successfully', 200, allProducts);

    } catch (error) {
        console.error("Error fetching products:", error);
        return ResponseUtils.failureResponse(res, "Check your internet connection and try again", 500);
    }
};
