const {Candidate} = require("../../schemas");

const getCandidateById = async (req, res, next) => {
  try {
    const { candidateId } = req.params;
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      candidate,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCandidateById;