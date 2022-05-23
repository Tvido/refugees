const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const favoriteSchema = Schema(
  {
    position: {
      type: String,
      minlength: 2,
    },
    place: {
      type: String,
      minlength: 2,
    },
    type: {
      type: String,
      minlength: 2,
    },
    salaryMin: {
      type: Number,
      minlength: 2,
    },
    salaryMax: {
      type: Number,
      minlength: 2,
    },
    description: {
      type: String,
      minlength: 2,
    },
    eployeerName: {
      type: String,
      minlength: 2,
    },
    number: {
      type: String,
      minlength: 2,
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
  position: Joi.string(),
  place: Joi.string(),
  type: Joi.string(),
  salaryMin: Joi.number(),
  salaryMax: Joi.number(),
  description: Joi.string(),
  eployeerName: Joi.string(),
  number: Joi.string(),
});

const Favorite = model("favorites", favoriteSchema);

module.exports = { Favorite, joiSchema };
