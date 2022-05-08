const { User } = require("../../schemas/user");
const { Role } = require("../../schemas/role");


const getAllUsers = async (req, res, next) => {
    try {
        // const userRole = new Role()
        // const recruiterRole = new Role({ value: "recruiter" })
        // await userRole.save()
        // await recruiterRole.save()

        const users = await User.find({});
        res.json({
            users,
        });
    } catch (error) {
        next(error);
    }
}
module.exports = getAllUsers;