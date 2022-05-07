const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const favoriteSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
});

const Favorite = model("favorite", favoriteSchema);

module.exports = { Favorite, joiSchema };