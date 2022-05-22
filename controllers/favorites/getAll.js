const { Favorite } = require("../../schemas");

const getAll = async (req, res, next) => {
  const result = await Favorite.find({ owner: req.user._id });
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
