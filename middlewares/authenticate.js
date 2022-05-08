const jwt = require("jsonwebtoken");
const { Unautorized } = require("http-errors");
const { User } = require("../schemas/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        const [bearer, token] = req.headers.authorization.split(" ");

        if (bearer !== "Bearer") {
            throw new Unautorized();
        }

        const { id } = jwt.verify(token, SECRET_KEY);

        const user = await User.findById(id);
        console.log(user);
        // const userRole = await User.findById(id);
        // const userRole = await Role.findOne({value: "recruiter"})

        req.user = user;
        next();
    } catch (error) {
        throw new Unautorized();
    }

};

module.exports = authenticate;
