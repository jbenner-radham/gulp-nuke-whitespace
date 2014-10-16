'use strict';

var gutil   = require('gulp-util');
var lv426   = require('./nuker.js');
var through = require('through2');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			cb();
			return;
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-nuke-whitespace', 'Streaming not supported'));
			cb();
			return;
		}

		try {
			file.contents = new Buffer(lv426(file.contents.toString()));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-nuke-whitespace', err));
		}

		cb();
	});
};
