import ControllerView from '../views/ControllerView.js'
import ListView from '../views/ListView.js'

import FrogsModel from '../models/FrogsModel.js'

const Controller = {
	selectors: {
		controller: document.getElementById('controller'),
		list: document.getElementById('list'),
	},
	data: {
		selectedFlog: []
	},
	init: () => {
		ControllerView.setup(Controller.selectors.controller)
			.on('action', console.log)

		ListView.setup(Controller.selectors.list)
			.on('select:update', Controller.select)

		Controller.fetchFlogs()
	},
	fetchFlogs: () => {
		FrogsModel.get()
			.then(ListView.render)
			.then(ControllerView.unlock)
			.catch(console.error)
	},
	select: data => {
		Controller.data.selectedFlog = data
		console.log(Controller.data.selectedFlog)
	}
}

export default Controller