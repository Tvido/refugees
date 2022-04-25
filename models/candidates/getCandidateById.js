const {getAllCandidates} = require("./getAllCandidates")

const getCandidateById = async (candidateId) => {
  try {
    const candidates = await getAllCandidates();
    const selectCandidate = candidates.find(
      (item) => String(item.id) === String(candidateId)
    );
    if (!selectCandidate) {
      return null;
    }
    return selectCandidate;
  } catch (error) {
    throw error;
  }
};

module.exports = getCandidateById;