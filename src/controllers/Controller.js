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
			.on('action', Controller.catchAction)

		ListView.setup(Controller.selectors.list)

		Controller.fetchFrogs()
	},
	fetchFrogs: () => {
		FrogsModel.get()
			.then(ListView.render)
			.then(ControllerView.unlock)
			.catch(console.error)
	},
	catchAction: action => {
		const selectedFrog = ListView.selectedFrog;

		switch (action) {
			case 'first':
				FrogsModel.forceMove(selectedFrog, 0)
				break;
			case 'last':
				const lastLandingPoint = FrogsModel.data.length - Controller.data.selectedFrog.length

				FrogsModel.forceMove(selectedFrog, lastLandingPoint)
				break;
			case 'prev':
				FrogsModel.swapMove(selectedFrog, -1)
				break;
			case 'next':
				FrogsModel.swapMove(selectedFrog, 1)
				break;
			case 'reset':
				FrogsModel.reset()
				ListView.deselectAll()
				break;
			case 'deselect':
				ListView.deselectAll()
				break;
		}

		ListView.render(FrogsModel.data)
	}
}

export default Controller