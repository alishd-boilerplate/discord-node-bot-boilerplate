import jwt from "jsonwebtoken";

const verifyToken = (req, res, next): undefined => {
	let token = req.headers["authorization"];
	if (!token) {
		return res.status(403).send({ message: "No token provided!" });
	}
	token = token.replace("Bearer", "").trim();

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: "Unauthorized!" });
		}
		req.username = decoded.username;
		next();
	});
};

const authJwt = {
	verifyToken,
};
module.exports = authJwt;
