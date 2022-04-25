const {Vacancy} = require("../../schemas");

const deleteVacancy = async (req, res, next) => {
  try {
    const { vacancyId } = req.params;
    const deleteVacancy = await Vacancy.findByIdAndDelete(vacancyId);

    if (!deleteVacancy) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      deleteVacancy,
      message: "vacancy deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteVacancy;