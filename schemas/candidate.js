const { Schema, Types, model } = require("mongoose");
const Joi = require("joi");

const candidateSchema = Schema(
  {
    name: {
      type: String,
      minlength: 2,
    },
    positionWant: {
      type: String,
      minlength: 2,
    },
    birth: {
      type: String,
      minlength: 2,
    },
    email: {
      type: String,
      minlength: 2,
    },
    phoneNumber: {
      type: String,
      minlength: 2,
    },
    region: {
      type: String,
      minlength: 2,
    },
    company: {
      type: String,
      minlength: 2,
    },
    position: {
      type: String,
      minlength: 2,
    },
    workDateFrom: {
      type: String,
    },
    workDateTo: {
      type: String,
    },
    educationLevel: {
      type: String,
      minlength: 2,
    },
    educationPlace: {
      type: String,
      minlength: 2,
    },
    speciality: {
      type: String,
      minlength: 2,
    },
    studyDateFrom: {
      type: String,
    },
    studyDateTo: {
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
  name: Joi.string().min(2),
  positionWant: Joi.string().min(2),
  birth: Joi.string().min(2),
  email: Joi.string().min(2),
  phoneNumber: Joi.string().min(2),
  region: Joi.string().min(2),
  company: Joi.string().min(2),
  position: Joi.string().min(2),
  workDateFrom: Joi.string(),
  workDateTo: Joi.string(),
  educationLevel: Joi.string().min(2),
  educationPlace: Joi.string().min(2),
  speciality: Joi.string().min(2),
  studyDateFrom: Joi.string(),
  studyDateTo: Joi.string(),
});

const Candidate = model('candidates', candidateSchema);

module.exports = { Candidate, joiSchema };