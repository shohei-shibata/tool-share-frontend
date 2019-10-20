const Tools = {
	filterToolsByKeyword: (keyword, tools) => {
		return keyword.length > 0 ?
			tools.filter(tool => {
				return nameMatches(keyword, tool.name);
			})
		:
			tools
	},
	filterToolsByGroups: (groups, tools) => {
		console.log('filterToolsByGroups', groups, tools);
		let filteredTools = tools.filter(tool => {
			let found = false;
			console.log(tool);
			groups.forEach(group => {
				console.log(group, tool.accessibleGroups);
				if (tool.accessibleGroups.includes(group)) {
					found = true;
				}
			});
			return found;
		});
		console.log('filteredTools', filteredTools);
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

