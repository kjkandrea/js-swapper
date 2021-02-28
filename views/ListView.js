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

	data.forEach(({ index, name }) => {
		const isSelected = ListView.selectedFrog.some(v => v === index)

		const liEl = document.createElement('li')
		const buttonEl = document.createElement('button')
		const buttonText = document.createTextNode(name)
		buttonEl.appendChild(buttonText)
		buttonEl.dataset.index = index;
		liEl.appendChild(buttonEl)
		if (isSelected) buttonEl.className = 'selected';

		ListView.el.appendChild(liEl)
	})
}

ListView.bindEvents = function(el) {
	el.addEventListener('click', ListView.selectFrog)
}

ListView.selectFrog = function(event) {
	const index = event.target.dataset.index;
	if (!index) return;

	const frogIndex = ListView.selectedFrog.findIndex(v => v === index);
	if (frogIndex !== -1) {
		ListView.selectedFrog.splice(frogIndex, 1)
		ListView.bindClass(event.target)
	} else {
		ListView.selectedFrog.push(Number(index))
		ListView.bindClass(event.target, true)
	}

	ListView.emit('select:update', ListView.selectedFrog)
}

ListView.bindClass = function(el, add) {
	add ? el.classList = 'selected' : el.classList = ''
}

export default ListView;