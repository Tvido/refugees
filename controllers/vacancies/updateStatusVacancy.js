const {Vacancy} = require("../../schemas");

const updateStatusVacancy = async (req, res, next) => {
  try {
    const { vacancyId } = req.params;
    const updateVacancy = await Vacancy.findByIdAndUpdate(
      vacancyId,
    );
    if (!updateVacancy) {
      return res.status(404).json({ message: "missing fields favorite" });
    }
    res.json({ updateVacancy });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusVacancy;