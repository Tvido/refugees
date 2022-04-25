const {User} = require("../../schemas/user");
// const bcrypt = require("bcryptjs");

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

        //no hash:
        //const hashPass = bcrypt.hashSync(password, bcrypt.getSaltSync(5))
        // const newUser = await User.create({email, password: hashPass})

        //with hash:
        const newUser = new User({email})
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