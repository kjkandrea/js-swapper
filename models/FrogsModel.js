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
	},
	forceMove( moveUnitAddress, landingPoint ) {
		// 이동 유닛들을 모든 유닛들 중 선발한다.
		const allUnits = [...this.data];
		const moveUnits = this.data.reduce((moveUnits, { index }, arrayIndex) => {
			const isSelected = moveUnitAddress.some(v => v === index);

			if (isSelected) {
				const [unit] = allUnits.splice(arrayIndex - moveUnits.length, 1);
				moveUnits.push(unit);
			}

			return moveUnits;
		}, []);

		// 이동 유닛 들을 랜딩포인트에 이동 시킨다.
		allUnits.splice(landingPoint, 0, ...moveUnits);
		this.data = allUnits;

		console.log('updated')
	}
}