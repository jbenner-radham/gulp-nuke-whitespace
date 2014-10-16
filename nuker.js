module.exports = function(str) {
	var regex = {
		trailingWhitespace: /( +)(?:\n|\r|\r\n)/m 
	};

	return str.replace(regex.trailingWhitespace, '');
};
