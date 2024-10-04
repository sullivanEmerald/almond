
const ResponseUtils = {
    successResponse: (res, msg, code = 200, data = null) => {
        return res.status(code).json({ success: true, msg, data })
    },

    failureResponse: (res, msg, code = 500, data = null) => {
        return res.status(code).json({ msg, success: false, data })
    }
}



export default ResponseUtils;
