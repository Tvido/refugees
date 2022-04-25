const { v4 } = require("uuid");

const getAllVacancies = require("./getAllVacancies");
const updateVacancy = require("./updateVacancy");

const addVacancy = async (body) => {
  try {
    const newVacancy = { ...body, id: v4() };
    const vacancies = await getAllVacancies();
    vacancies.push(newVacancy);
    await updateVacancy(vacancies);
    console.log(newVacancy);
    return newVacancy;
  } catch (error) {
    throw error;
  }
};

module.exports = addVacancy;