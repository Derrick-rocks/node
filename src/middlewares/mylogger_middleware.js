 const myLogger = function (req, res, next) {
    console.log('===== first middleware ======')
    next()
}

exports.logger = myLogger;
