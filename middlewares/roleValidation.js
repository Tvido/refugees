// const roleValidation = (...roles) => {
//     return (req, res, next) => {
//         // if (!req?.roles) {
//         //     return res.sendStatus(401);
//         // }
//         const rolesArray = [...roles];
//         console.log("Roles: ", ...rolesArray);
//         const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
//         if (!result) {
//             return res.sendStatus(401);
//         }
//         next();
//     }
// }

// module.exports = roleValidation

const jwt = require("jsonwebtoken");
const { Unautorized, Forbidden } = require("http-errors");
const { User } = require("../schemas/user");

const { SECRET_KEY } = process.env;

const roleValidation = function (roles) {
    
    return function (req, res, next)  {
        try {
            // const [bearer, token] = req.headers.authorization.split(" ");

            // if (bearer !== "Bearer") {
            //     throw new Unautorized();
            // }

            // const { id } = jwt.verify(token, SECRET_KEY);
            // const user = User.findById(id);
            console.log("role:" , req.user.roles);
            // let hasRole = false
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
