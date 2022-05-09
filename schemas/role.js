const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const roles = {
    USER: "user",
    RECRUITER: "recruiters"
}

//на фронті створити приховане поле value = "recruiter"
const roleSchema = Schema(
    {
        value: {
            type: String,
            unique: true,
            default: roles.USER
        },
        user: {
            type: Types.ObjectId,
            ref: "users"
        }
    },
    { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
    value: Joi.string(),
});

const Role = model("roles", roleSchema);

module.exports =  { Role, joiSchema, roles };