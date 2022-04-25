const {getAllVacancies} = require("./getAllVacancies")

const getVacancyById = async (vacancyId) => {
  try {
    const vacancies = await getAllVacancies();
    const selectVacancy = vacancies.find(
      (item) => String(item.id) === String(vacancyId)
    );
    if (!selectVacancy) {
      return null;
    }
    return selectVacancy;
  } catch (error) {
    throw error;
  }
};

module.exports = getVacancyById;