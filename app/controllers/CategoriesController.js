exports.mensIndex = function (req, res) {
    res.render('categories/mens');
}

exports.womansIndex = function (req, res) {
    res.render('categories/womans');
}

exports.mensClothingIndex = function (req, res) {
    res.render('categories/mens/mens-clothing');
}

exports.womansClothingIndex = function (req, res) {
    res.render('categories/womans/womans-clothing');
}