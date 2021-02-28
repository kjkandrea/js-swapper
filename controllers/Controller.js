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
			.on('action', Controller.catchAction)

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
	},
	catchAction: action => {
		const selectedFrog = Controller.data.selectedFlog;

		switch (action) {
			case 'first':
				FrogsModel.forceMove(selectedFrog, 0)
				break;
			case 'last':
				const lastLandingPoint = FrogsModel.data.length - Controller.data.selectedFlog.length

				FrogsModel.forceMove(selectedFrog, lastLandingPoint)
				break;
			case 'prev':
				FrogsModel.swapMove(selectedFrog, -1)
				break;
			case 'next':
				FrogsModel.swapMove(selectedFrog, 1)
				break;
		}

		ListView.render(FrogsModel.data)
	}
}

export default Controller