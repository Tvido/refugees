const {Vacancy} = require("../../schemas");

const addVacancy = async (req, res, next) => {
  try {
    const result = await Vacancy.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = addVacancy;