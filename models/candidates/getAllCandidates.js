const fs = require("fs/promises");

const filePath = require("./filePath");

const getAllCandidates = async () => {
  try {
    const data = await fs.readFile(filePath);
    const candidates = JSON.parse(data);
    return candidates;
  } catch (err) {
    throw err;
  }
};

module.exports = getAllCandidates;