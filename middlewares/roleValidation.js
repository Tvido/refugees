const jwt = require("jsonwebtoken");
const { Unauthorized, Forbidden } = require("http-errors");
// const { User } = require("../schemas/user");
// const { SECRET_KEY } = process.env;

const roleValidation = function (roles) {
    return async function (req, res, next) {
        try {

            await req.user.populate("roles")

            const userRoles = req.user.roles
            console.log("req.user: ", req.user);
            console.log("userRoles: ", userRoles);
            const hasRole = userRoles.some(role => roles.includes(role.value))

            if (!hasRole) {
                throw new Forbidden();
            }

            next();
        } catch (error) {
            console.log(error);
            next(new Unauthorized())
        }
    }
}

module.exports = roleValidation;
