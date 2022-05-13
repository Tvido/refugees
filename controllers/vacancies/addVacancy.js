const { Vacancy } = require("../../schemas");

const addVacancy = async (req, res, next) => {
  try {
    const vacancy = await Vacancy.findOne({ ...req.body, owner: req.user._id })

    if (vacancy) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Resume already exist",
      });
    }

    const newVacancy = { ...req.body, owner: req.user._id };
    const result = await Vacancy.create(newVacancy);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addVacancy;

// const addVacancy = async (req, res, next) => {
//   try {
//     const result = await Vacancy.create(req.body);
//     console.log('result', result)
//     res.status(201).json({ result });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = addVacancy;