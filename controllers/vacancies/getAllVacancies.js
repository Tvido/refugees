const { Vacancy } = require("../../schemas");

const getAllVacancies = async (req, res, next) => {
  try {
    let query = {};
    if (req.user) {
      query = { owner: req.user._id };
    }

    const vacancies = await Vacancy.find(query).populate(
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
