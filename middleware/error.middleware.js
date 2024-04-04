function errorHandlerMiddleware(err, req, res, next) {
    let customError = {
      statusCode: err.statusCode || 500,
      message: err.message || "Something went wrong try again later",
      errors: err.errors,
    };
  
    return res.status(customError.statusCode).json({
        success: false,
        message: customError.message,
        errors: customError.errors,
    });
  }
  
  export default errorHandlerMiddleware;