//Returns the root directory but could be left off
//to a cleaner controller
const path = require('path');
module.exports = () => path.dirname(process.mainModule.filename);
