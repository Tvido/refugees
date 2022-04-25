const updateCandidate = require("./updateCandidate");
const getAllCandidates = require("./getAllCandidates");

const update = async (candidateId, body) => {
  try {
    const candidates = await getAllCandidates();
    const idx = candidates.findIndex(
      (item) => String(item.id) === String(candidateId)
    );
    if (idx === -1) {
      return null;
    }
    candidates[idx] = { ...candidates[idx], ...body };
    await updateCandidate(candidates);
    return candidates[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;