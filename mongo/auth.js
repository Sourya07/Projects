const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";

function auth(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);
    console.log(response)

    if (response) {
        req.usertodoid = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,

}
