const {Vacancy} = require("../../schemas");

const update = async (vacancyId, body) => {
  try {
    const { vacancyId } = req.params;
    const updateVacancy = await Vacancy.findByIdAndUpdate(vacancyId, req.body, {
      new: true,
    });
    if (!updateVacancy) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateVacancy });
  } catch (error) {
    next(error);
  }
};

module.exports = update;