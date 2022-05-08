const jwt = require("jsonwebtoken");
const { User } = require("../../schemas/user");
const {Role} = require("../../schemas/role");

const login = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password)) {
        return res.status(400).json({
            status: "error",
            code: 400,
            message: "Email or password is wrong",
        });
    }

    const payload = {
        id: user._id,
        //-----
        roles: user.roles
    };

    const {SECRET_KEY} = process.env;

    const token = jwt.sign(payload, SECRET_KEY);
    await User.findByIdAndUpdate(user._id, {token});
    res.json({token});
};

module.exports = login;
