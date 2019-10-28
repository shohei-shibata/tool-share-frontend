import fakeGroups from '../mock_data/fakeGroups'
import fakeTools from '../mock_data/fakeTools'

const Api = {

	getGroupsByIds: (myUserId) => {
		return fakeGroups;
	},
	getToolsByGroupIds: (arrOfIds) => {
		return fakeTools;
	}


}

export default Api;
