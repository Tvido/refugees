const {Candidate} = require("../../schemas");

const updateStatusVacancy = async (req, res, next) => {
  try {
    const { candidateId } = req.params;
    const updateCandidate = await Candidate.findByIdAndUpdate(
      candidateId,
    );
    if (!updateCandidate) {
      return res.status(404).json({ message: "missing fields favorite" });
    }
    res.json({ updateCandidate });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusVacancy;