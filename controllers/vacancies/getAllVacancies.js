const { Vacancy } = require("../../schemas");

const getAllVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find({ owner: req.user._id }).populate(
      "owner",
      "_id email",
      "roles"
    );
    res.json({
      vacancies,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllVacancies;