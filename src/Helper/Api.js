import fakeGroups from '../mock_data/fakeGroups'
import fakeTools from '../mock_data/fakeTools'

const Api = {

	getGroupsByIds: (arrOfGroupIds) => {
		return fakeGroups;
	},
	getToolsByGroupIds: (arrOfGroupIds) => {
		return fakeTools.filter(tool => {
		  let match = false;
		  tool.accessibleGroups.forEach(groupId => {
		    if (arrOfGroupIds.indexOf(groupId) >= 0) { match = true; }
		  });
		  return match;
		});
	},
	getOwnTools: (userId) => {
		return fakeTools.filter(tool => {
		  return tool.owner._id === userId
		});
	}


}

export default Api;
