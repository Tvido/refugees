const { Schema, model } = require("mongoose");
const Joi = require("joi");

//на фронті створити приховане поле value = "recruiter"
const roleSchema = Schema(
    {
        value: {
            type: String,
            unique: true,
            default: "user"
        },
    },
    { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
    value: Joi.string(),
});

const Role = model("role", roleSchema);

module.exports =  { Role, joiSchema };