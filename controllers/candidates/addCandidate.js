const { Candidate } = require("../../schemas");

const addCandidate = async (req, res, next) => {
  try {
    const candidate = await Candidate.findOne({ ...req.body, owner: req.user._id })

    if (candidate) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Resume already exist",
      });
    }

    const newCandidate = { ...req.body, owner: req.user._id };
    const result = await Candidate.create(newCandidate);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addCandidate;