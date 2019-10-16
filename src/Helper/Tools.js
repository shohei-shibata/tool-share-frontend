const Tools = {
	filterToolsByKeyword: (keyword, tools) => {
		return keyword.length > 0 ?
			tools.filter(tool => {
				return nameMatches(keyword, tool.name);
			})
		:
			tools
	}

};

export default Tools;

const nameMatches = (keyword, dataString) => {
	let regex = new RegExp(keyword);
	return keyword.length > 0 ?
		regex.test(dataString)
	:
		false
};

