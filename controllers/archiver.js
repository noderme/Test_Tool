var smartZip = require("smart-zip");
 
exports.archive = function(){

var regexExcludes = ['index.html'];

smartZip.zip('', 'app.zip', true, regexExcludes, function (error) {
    if (error) {
        throw error;
    }
    console.log('zip file created with top folder.');
});
}