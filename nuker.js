module.exports = function(str) {
	var regex = {
		trailingWhitespace: /( +)(\n|\r|\r\n)/gm
	};

	return str.replace(regex.trailingWhitespace, '');
};
