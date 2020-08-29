//Its showing the full path on the view.
//So not every link its working.
get_breadcrumbs = function (url) {
    var rtn = [{ name: "HOME", url: "/" }],
        acc = "", // accumulative url
        arr = url.substring(1).split("/");

    for (i = 0; i < arr.length; i++) {
        acc = i != arr.length - 1 ? acc + "/" + arr[i] : null;
        rtn[i + 1] = { name: arr[i].toUpperCase(), url: acc };
    }
    return rtn;
};

module.exports = (req, res, next) => {
    res.locals.breadcrumbs = get_breadcrumbs(req.originalUrl);
    next();
}