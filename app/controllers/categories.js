const asyncWrapper = require('../util/asyncWrapper');
const getDirname = require('../util/getDirname');
const path = require('path');
const { getAllCategories, getSingleCategory, getRootCategories } = require('../services/api');

exports.getCategories = asyncWrapper(async (req, res) => {
    const mainCategorySlug = req.params.id;
    const mainCategory = await getSingleCategory(mainCategorySlug);


    //const categories = mainCategorySlug ? await getRootCategories(mainCategorySlug) : await getAllCategories();

    let categories = await getAllCategories();

    const m = /^mens$/;
    const w = /^womens$/;

    if (mainCategorySlug === 'mens') {
        let men = categories.filter(c => {
            if (c.parent_category_id !== 'root') {
                let slugArr = c.id.split('-');
                if (m.test(slugArr[0])) {
                    return c;
                }
            }
        });
        categories = men;
    } else {
        let women = categories.filter(c => {
            if (c.parent_category_id !== 'root') {
                let slugArr = c.id.split('-');
                if (w.test(slugArr[0])) {
                    return c;
                }
            }
        });
        categories = women;
    }

    res.render(path.join(getDirname(), 'views', 'products', 'categories'), { mainCategory, categories });
    //res.status(200).render('views/products/categories', { mainCategory, categories });

});