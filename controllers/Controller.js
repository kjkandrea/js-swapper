import ListView from '../views/ListView.js'

import FrogsModel from '../models/FrogsModel.js'

const Controller = {
	selectors: {
		list: document.getElementById('list'),
	},
	init: () => {
		ListView.setup(Controller.selectors.list)

		Controller.fetchFlogs()
	},
	fetchFlogs: () => {
		FrogsModel.get()
			.then(ListView.render)
			.catch(console.error)
	}
}

export default Controller