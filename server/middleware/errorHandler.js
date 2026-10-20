const errorHandler = (err, req, res, next) => {
  console.error('API Error:', err.message || err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      success: false,
      message: messages.join('. ')
    });
  }

  // Mongoose CastError (bad ObjectId)
  if (err.name === 'CastError') {
    return res.status(404).json({
      success: false,
      message: 'Resource not found'
    });
  }

  // Generic internal server error
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Internal Error'
  });
};

export default errorHandler;
