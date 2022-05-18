const {Candidate} = require("../../schemas");

const update = async (req, res, next) => {
  try {
    const { candidateId } = req.params;
    const updateCandidate = await Candidate.findByIdAndUpdate(candidateId, req.body, {
      new: true,
    });
    if (!updateCandidate) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateCandidate });
  } catch (error) {
    next(error);
  }
};

module.exports = update;