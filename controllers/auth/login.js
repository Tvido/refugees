// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../../schemas/user");

const login = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password)) {
        return res.status(400).json({
            status: "error",
            code: 400,
            message: "Email or password is wrong",
        });
    // }
    // if (!user) {
    //     return res.status(400).json({
    //         status: "error",
    //         code: 400,
    //         message: "Email or password is wrong",
    //     });
    // }
    // const hashPass = user.password;
    // const compareResult = bcrypt.compareSync(password, hashPass);
    // //const compareResult = user.comparePassword(password) //????
        // if (!compareResult) {
    //     return res.status(400).json({
    //         status: "error",
    //         code: 400,
    //         message: "Email or password is wrong",
    //     });
    }

    const payload = {
        id: user._id,
    };

    const {SECRET_KEY} = process.env;

    const token = jwt.sign(payload, SECRET_KEY);
    await User.findByIdAndUpdate(user._id, {token});
    res.json({token});
};

module.exports = login;


// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { BadRequest } = require("http-errors");
// const { User } = require("../../schemas/user");
//
// const login = async (req, res, next) => {
//     const { email, password } = req.body;
//     const user = await User.findOne(email);
//     if (!user) {
//         throw new BadRequest("Email wrong");
//     }
//     const hashPassword = user.password;
//     const compareResult = bcrypt.compareSync(password, hashPassword);
//     if (!compareResult) {
//         throw new BadRequest("Password is wrong");
//     }
//
//     const payload = {
//         id: user._id,
//     };
//
//     const { SECRET_KEY } = process.env;
//
//     const token = jwt.sign(payload, SECRET_KEY);
//     await User.findByIdAndUpdate(user._id, { token });
//     res.json({ token });
// };
//
// module.exports = login;