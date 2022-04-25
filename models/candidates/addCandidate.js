const { v4 } = require("uuid");

const getAllCandidates = require("./getAllCandidates");
const updateCandidate = require("./updateCandidate");

const addCandidate = async (body) => {
  try {
    const newCandidate = { ...body, id: v4() };
    const candidates = await getAllCandidates();
    candidates.push(newCandidate);
    await updateCandidate(candidates);
    console.log(newCandidate);
    return newCandidate;
  } catch (error) {
    throw error;
  }
};

module.exports = addCandidate;