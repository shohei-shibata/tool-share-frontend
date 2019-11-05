import fakeGroups from '../mock_data/fakeGroups'
import fakeTools from '../mock_data/fakeTools'

const Api = {

	getGroupsByIds: (arrOfGroupIds) => {
		return fakeGroups;
	},
	getToolsByGroupIds: (arrOfGroupIds) => {
		return fakeTools;
	}


}

export default Api;
