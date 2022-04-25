const fs = require("fs/promises");

const filePath = require("./filePath");

const updateCandidate = async (newCandidate) => {
  const candidatesString = JSON.stringify(newCandidate);
  await fs.writeFile(filePath, candidatesString);
};

module.exports = updateCandidate;