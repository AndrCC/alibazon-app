const { getChildCategories } = require('../services/api')
const asyncWrapper = require('../util/asyncWrapper');


exports.getHome = asyncWrapper(async (req, res) => {
    const categories = await getChildCategories('root');

    res.status(200).render('index', { categories });
})