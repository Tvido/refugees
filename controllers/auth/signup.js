const {User} = require("../../schemas/user");
const {Role} = require("../../schemas/role");

const signup = async (req, res, next) => {
    try {
        const { email, password, roles = "user" } = req.body;
        let { companyName = null } = req.body
        const user = await User.findOne({email});

        if (user) {
            return res.status(409).json({
                status: "error",
                code: 409,
                message: "Email in use",
            });
        }

        if (roles === "user") {
            companyName = null
        }

        const userRole = await Role.findOne({value: roles})
        const newUser = new User({email, companyName, roles: [userRole]})
        newUser.setPassword(password)
        await newUser.save()

        res.status(201).json({
        status: "success",
        code: 201,
        message: "Success register",
    });
    } catch (error) {
        next(error)
    }
};

module.exports = signup;