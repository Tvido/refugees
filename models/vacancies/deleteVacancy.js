const updateVacancy = require("./updateVacancy");
const getAllVacancies = require("./getAllVacancies");


const deleteVacancy = async (vacancyId) => {
  try {
    const vacancies = await getAllVacancies();
    const idx = vacancies.findIndex(
      (item) => String(item.id) === String(vacancyId)
    );
    if (idx === -1) {
      return null;
    };

    const newVacancies = vacancies.filter(
      item => String(item.id) !== String(vacancyId)
    )

    await updateVacancy(newVacancies);
    return vacancies[idx];

  } catch (error) {
    next(error);
  }
};

module.exports = deleteVacancy;