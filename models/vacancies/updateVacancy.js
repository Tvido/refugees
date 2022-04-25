const fs = require("fs/promises");

const filePath = require("./filePath");

const updateVacancy = async (newVacancy) => {
  const vacanciesString = JSON.stringify(newVacancy);
  await fs.writeFile(filePath, vacanciesString);
};

module.exports = updateVacancy;