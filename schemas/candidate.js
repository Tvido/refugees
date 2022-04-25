const { Schema, model } = require("mongoose");
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
      type: Number,
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
    workMonthFrom: {
      type: Number,
      minlength: 2,
    },
    workYearFrom: {
      type: Number,
      minlength: 2,
    },
    workMonthTo: {
      type: Number,
      minlength: 2,
    },
    workYearTo: {
      type: Number,
      minlength: 2,
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
    stadyMonthFrom: {
      type: Number,
      minlength: 2,
    },
    stadyYearFrom: {
      type: Number,
      minlength: 2,
    },
    stadyMonthTo: {
      type: Number,
      minlength: 2,
    },
    stadyYearTo: {
      type: Number,
      minlength: 2,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(2),
  positionWant: Joi.string().min(2),
  birth: Joi.string().min(2),
  email: Joi.string().min(2),
  phoneNumber: Joi.number().min(2),
  region: Joi.string().min(2),
  company: Joi.string().min(2),
  position: Joi.string().min(2),
  workMonthFrom: Joi.number().min(2),
  workYearFrom: Joi.number().min(2),
  workMonthTo: Joi.number().min(2),
  workYearTo: Joi.number().min(2),
  educationLevel: Joi.string().min(2),
  educationPlace: Joi.string().min(2),
  speciality: Joi.string().min(2),
  stadyMonthFrom: Joi.number().min(2),
  stadyYearFrom: Joi.number().min(2),
  stadyMonthTo: Joi.number().min(2),
  stadyYearTo: Joi.number().min(2),
});

const Candidate = model('candidates', candidateSchema);

module.exports = { Candidate, joiSchema };


// nameSurname: '',
// 		birthdayDate: '',
// 		phone: '',
// 		lookingForPosition: '',
// 		lookingForCity: '

// stadyMonthTo