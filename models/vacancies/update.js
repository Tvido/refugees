const updateVacancy = require("./updateVacancy");
const getAllVacancies = require("./getAllVacancies");

const update = async (vacancyId, body) => {
  try {
    const vacancies = await getAllVacancies();
    const idx = vacancies.findIndex(
      (item) => String(item.id) === String(vacancyId)
    );
    if (idx === -1) {
      return null;
    }
    vacancies[idx] = { ...vacancies[idx], ...body };
    await updateVacancy(vacancies);
    return vacancies[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;