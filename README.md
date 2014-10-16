# [gulp](http://gulpjs.com)-nuke-whitespace

> Removes the trailing whitespace at the end of each line in a string.


## Install

```sh
$ npm install --save-dev gulp-nuke-whitespace
```


## Usage

```js
var gulp = require('gulp');
var nukeWhitespace = require('gulp-nuke-whitespace');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(nukeWhitespace())
		.pipe(gulp.dest('dist'));
});
```

## Testing

Not implemented yet... doh!


## License

MIT © [James Benner](https://github.com/jbenner55)
