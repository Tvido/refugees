const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const favoriteSchema = Schema(
  {
    name: {
      type: String,
    },
    owner: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string(),
});

const Favorite = model("favorites", favoriteSchema);

module.exports = { Favorite, joiSchema };
