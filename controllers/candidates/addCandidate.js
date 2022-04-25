const {Candidate} = require("../../schemas");

const addCandidate = async (req, res, next) => {
  try {
    const result = await Candidate.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = addCandidate;