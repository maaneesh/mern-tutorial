const errorHandler = (er,req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode  : 500
    res.status(statusCode)

    res.json({
        message:errorHandler.message,
        stact:process.env.NODE_ENV === 'production' ? null : errorHandler.stact
    })
}

module.exports = {
    errorHandler,
    
}