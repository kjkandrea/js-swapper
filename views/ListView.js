import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
	this.el = el
	this.selectedFrog = []
	this.bindEvents(el)
	return this
}

ListView.render = function(data) {
	ListView.el.innerHTML = ''

	data.forEach(({ id, name }) => {
		const isSelected = ListView.selectedFrog.some(v => v === id)

		const liEl = document.createElement('li')
		const buttonEl = document.createElement('button')
		const buttonText = document.createTextNode(name)
		buttonEl.appendChild(buttonText)
		buttonEl.dataset.id = id;
		liEl.appendChild(buttonEl)
		if (isSelected) buttonEl.className = 'selected';

		ListView.el.appendChild(liEl)
	})
}

ListView.bindEvents = function(el) {
	el.addEventListener('click', ListView.onClickFrog)
}

ListView.onClickFrog = function(event) {
	const CLASS_NAME = 'selected'

	const target = event.target;
	const id = Number(target.dataset.id);

	if (!id) return;

	const isSelected = target.classList.value === CLASS_NAME

	if (isSelected) {
		ListView.deselect(target, id)
		return;
	}

	ListView.select(target, id)

	ListView.emit('select:update', ListView.selectedFrog)
}

ListView.select = function (target, index) {
	const frogIndex = ListView.selectedFrog.findIndex(v => v === index);
	if (frogIndex !== -1) {
		ListView.selectedFrog.splice(frogIndex, 1)
		ListView.bindClass(target)
	} else {
		ListView.selectedFrog.push(index)
		ListView.bindClass(target, true)
	}
}

ListView.deselect = function (target, index) {
	const selectedIndexArrayIndex = ListView.selectedFrog.findIndex(v => v === index)
	target.className = ''
	ListView.selectedFrog.splice(selectedIndexArrayIndex, 1)
}

ListView.bindClass = function(el, add) {
	add ? el.classList = 'selected' : el.classList = ''
}

ListView.deselectAll = function () {
	ListView.selectedFrog = []
}

export default ListView;