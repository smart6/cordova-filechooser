module.exports = {
    open: function (mime, success, failure) {
        mime = mime || '*/*';
        cordova.exec(success, failure, "FileChooser", "open", [mime]);
    }
};
