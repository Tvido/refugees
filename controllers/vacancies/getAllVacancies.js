const {Vacancy} = require("../../schemas");

const getAllVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find({});
    res.json({
      vacancies,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllVacancies;