const {User} = require("../../schemas/user");
const {Role} = require("../../schemas/role");

const signup = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (user) {
            return res.status(409).json({
                status: "error",
                code: 409,
                message: "Email in use",
            });
        }

        const userRole = await Role.findOne({value: "recruiter"})
        const newUser = new User({email, roles: [userRole.value]})
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