import ListView from '../views/ListView.js'

import FrogsModel from '../models/FrogsModel.js'

const Controller = {
	selectors: {
		list: document.getElementById('list'),
	},
	init: () => {
		ListView.setup(Controller.selectors.list)
	},
}

export default Controller