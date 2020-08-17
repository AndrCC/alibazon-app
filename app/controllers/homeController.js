const { getRootCategories } = require('../services/api')
const asyncWrapper = require('../util/asyncWrapper');

exports.getHome = asyncWrapper(async (req, res) => {
  const categories = await getRootCategories('root');

  res.status(200).render('index', { categories });
})
