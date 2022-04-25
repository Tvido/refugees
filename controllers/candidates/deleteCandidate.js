const {Candidate} = require("../../schemas");

const deleteCandidate = async (req, res, next) => {
  try {
    const { candidateId } = req.params;
    const deleteCandidate = await Candidate.findByIdAndDelete(candidateId);

    if (!deleteCandidate) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      deleteCandidate,
      message: "Candidate deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCandidate;