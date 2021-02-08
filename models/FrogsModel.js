// My little cute frogs

export default {
	data: [
		{ index: 1, name: 'sad frog'},
		{ index: 2, name: 'happy frog'},
		{ index: 3, name: 'sexy frog'},
		{ index: 4, name: 'development frog'},
		{ index: 5, name: 'mania frog'},
		{ index: 6, name: 'cute frog'},
		{ index: 7, name: 'angry frog'},
		{ index: 8, name: 'tiny frog'},
	],

	get() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.data)
			}, 200)
		})
	}
}