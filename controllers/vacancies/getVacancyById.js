const {Vacancy} = require("../../schemas");

const getVacancyById = async (req, res, next) => {
  try {
    const { vacancyId } = req.params;
    const vacancy = await Vacancy.findById(vacancyId);
    if (!vacancy) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      vacancy,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getVacancyById;