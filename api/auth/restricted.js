const jwt = require('jsonwebtoken');  

const secrets = { jwtSecret: process.env.JWT_SECRET || 'keep it secret, keep it safe!' }



module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message:"Invalid Credentials" });
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message:"Login Required" });
    }
};

