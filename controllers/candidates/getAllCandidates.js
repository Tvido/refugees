const {Candidate} = require("../../schemas");

const getAllCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find({owner: req.user._id}).populate(
    "owner",
    "_id email"
  );
    res.json({
      candidates,
    });
  } catch (error) {
    next(error);
  }
};

// const getAllCandidates = async (req, res, next) => {
//   try {
//     const candidates = await Candidate.find();
//     res.json({
//       candidates,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = getAllCandidates;