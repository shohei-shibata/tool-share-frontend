const Tools = {
	filterToolsByKeyword: (keyword, tools) => {
		if (typeof tools !== 'object') { return undefined; }
		if (tools.length < 1) { return undefined; }
		return keyword.length > 0 ?
			tools.filter(tool => {
				return nameMatches(keyword, tool.name);
			})
		:
			tools
	},
	filterToolsByGroups: (groups, tools) => {
		let filteredTools = tools.filter(tool => {
			let found = false;
			groups.forEach(group => {
				if (tool.accessibleGroups.includes(group)) {
					found = true;
				}
			});
			return found;
		});
		return filteredTools;
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

