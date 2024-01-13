import jwt from 'jsonwebtoken'

export let authToken = (req, res, next) => {
    let token = req.header('token')
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.json({ message: err })
        } else {
            req.userId = decoded.userId
            next()
        }
    });
}