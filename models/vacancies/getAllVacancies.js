const fs = require("fs/promises");

const filePath = require("./filePath");

const getAllVacancies = async () => {
  try {
    const data = await fs.readFile(filePath);
    const vacancies = JSON.parse(data);
    return vacancies;
  } catch (err) {
    throw err;
  }
};

module.exports = getAllVacancies;