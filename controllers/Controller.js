import ControllerView from '../views/ControllerView.js'
import ListView from '../views/ListView.js'

import FrogsModel from '../models/FrogsModel.js'

const Controller = {
	selectors: {
		controller: document.getElementById('controller'),
		list: document.getElementById('list'),
	},
	init: () => {
		ControllerView.setup(Controller.selectors.controller)

		ListView.setup(Controller.selectors.list)
			.on('select:update', console.log)

		Controller.fetchFlogs()
	},
	fetchFlogs: () => {
		FrogsModel.get()
			.then(ListView.render)
			.then(ControllerView.unlock)
			.catch(console.error)
	},
}

export default Controller