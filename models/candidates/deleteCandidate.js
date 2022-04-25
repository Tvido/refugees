const updateCandidate = require("./updateCandidate");
const getAllCandidates = require("./getAllCandidates");


const deleteCandidate = async (candidateId) => {
  try {
    const candidates = await getAllCandidates();
    const idx = candidates.findIndex(
      (item) => String(item.id) === String(candidateId)
    );
    if (idx === -1) {
      return null;
    };

    const newCandidates = candidates.filter(
      item => String(item.id) !== String(candidateId)
    )

    await updateCandidate(newCandidates);
    return candidates[idx];

  } catch (error) {
    next(error);
  }
};

module.exports = deleteCandidate;