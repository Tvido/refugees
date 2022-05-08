const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: emailRegexp,
        },
        password: {
            type: String,
            required: true,
            minlength: 4,
        },
        companyName: {
            type: String,
            // required: true,
            minlength: 4,
        },
        token: {
            type: String,
            default: null,
        },
        // roles: {
        //     type: String,
        //     enum: ["user", "recruiter", "admin"],
        //     default: "user",
        // },
    },
    { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
    password: Joi.string().required().min(4),
    companyName: Joi.string().min(2),
});

userSchema.methods.setPassword = async function (password) {
    this.password = await bcrypt.hashSync(password, bcrypt.genSaltSync(5));
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model("user", userSchema);

module.exports = { User, joiSchema };
