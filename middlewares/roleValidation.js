const jwt = require("jsonwebtoken");
const { Unautorized, Forbidden } = require("http-errors");
// const { User } = require("../schemas/user");
// const { SECRET_KEY } = process.env;

const roleValidation = function (roles) {
    
    return function (req, res, next)  {
        try {
            const userRoles = req.user.roles
            const hasRole = userRoles.some(role => roles.includes(role))

            if (!hasRole) {
                throw new Forbidden();
            }

            next();
        } catch (error) {
            throw new Unautorized();
        }
    }
    }

module.exports = roleValidation;
