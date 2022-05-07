const { Candidate } = require("../../schemas");

const addCandidate = async (req, res, next) => {
  try {
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

// const addCandidate = async (req, res, next) => {
//   try {
//     const result = await Candidate.create(req.body);
//     res.status(201).json({ result });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = addCandidate;