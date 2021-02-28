// My little cute frogs

export default {
	data: [
		{ id: 1, name: 'sad frog'},
		{ id: 2, name: 'happy frog'},
		{ id: 3, name: 'sexy frog'},
		{ id: 4, name: 'development frog'},
		{ id: 5, name: 'mania frog'},
		{ id: 6, name: 'cute frog'},
		{ id: 7, name: 'angry frog'},
		{ id: 8, name: 'tiny frog'},
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
		const moveUnits = this.data.reduce((moveUnits, { id }, arrayIndex) => {
			const isSelected = moveUnitAddress.some(v => v === id);

			if (isSelected) {
				const [unit] = allUnits.splice(arrayIndex - moveUnits.length, 1);
				moveUnits.push(unit);
			}

			return moveUnits;
		}, []);

		// 이동 유닛 들을 랜딩포인트에 이동 시킨다.
		allUnits.splice(landingPoint, 0, ...moveUnits);
		this.data = allUnits;
	},
	swapMove(moveUnitAddress, landingPoint) {
		const swap = (scope, prev, next) => {
			[scope[prev], scope[next]] = [scope[next], scope[prev]];
		};

		const allUnits = [...this.data];
		// Array.reduce 를 사용하면서 accumulator 를 안쓴다는거 자체가 조금 이상하긴한데 reduceRight 를 쓰고싶어서..
		// forEachRight 같은게 있다면 그걸 쓸텐데
		const reducer = (unused, { id }, arrayIndex) => {
			const isSelected = moveUnitAddress.some(v => v === id);
			if (!isSelected) return;

			const maxLength = this.data.length;

			const moveTo = arrayIndex + landingPoint;

			// 전체 길이를 초과하거나, 전체 길이보다 짦게 이동하는것은 불허
			if (!(moveTo > -1 && moveTo < maxLength)) return;

			const moveUnit = allUnits[moveTo];
			const moveUnitIsSwapped = moveUnitAddress.some(v => v === moveUnit.id);

			if (!moveUnitIsSwapped) swap(allUnits, moveTo, arrayIndex);
		};

		if (landingPoint === -1) this.data.reduce(reducer, []);
		if (landingPoint === 1) this.data.reduceRight(reducer, []); // next 로 이동할 경우 역순으로 움직여라.

		this.data = allUnits;
	},
	reset() {
		this.data = [
			{ id: 1, name: 'sad frog'},
			{ id: 2, name: 'happy frog'},
			{ id: 3, name: 'sexy frog'},
			{ id: 4, name: 'development frog'},
			{ id: 5, name: 'mania frog'},
			{ id: 6, name: 'cute frog'},
			{ id: 7, name: 'angry frog'},
			{ id: 8, name: 'tiny frog'},
		]
	}
}