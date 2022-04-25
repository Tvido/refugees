const getAllVacancies = require("./getAllVacancies");
const addVacancy = require("./addVacancy");
const getVacancyById = require("./getVacancyById");
const deleteVacancy = require("./deleteVacancy");
const update = require("./update");
const updateStatusVacancy = require("./updateStatusVacancy");

module.exports = {
  getAllVacancies,
  addVacancy,
  getVacancyById,
  deleteVacancy,
  update,
  updateStatusVacancy,
};
