const { Candidate } = require("../../schemas");

const getAllCandidates = async (req, res, next) => {
  try {
    let query = {};
    if (req.user) {
      query = { owner: req.user._id };
    }

    const candidates = await Candidate.find(query).populate(
      "owner",
      "_id email",
      "roles"
    );
    res.json({
      candidates,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCandidates;
