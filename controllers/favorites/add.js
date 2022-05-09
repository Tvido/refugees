const { Favorite } = require("../../schemas");

const add = async (req, res, next) => {

  // console.log(req.user);
  const newFavorite = { ...req.body, owner: req.user._id };
  const result = await Favorite.create(newFavorite);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { result },
  });
};

module.exports = add;