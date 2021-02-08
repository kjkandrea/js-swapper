import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
	this.el = el
	this.selectedFrog = []
	this.bindEvents(el)
	return this
}

ListView.render = function(data) {
	ListView.el.innerHTML = data.map(({ index, name }) => {
		return `<li><button data-index="${index}">${ name }</button></li>`
	}).join('')
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
		ListView.selectedFrog.push(index)
		ListView.bindClass(event.target, true)
	}

	ListView.emit('select:update', ListView.selectedFrog)
}

ListView.bindClass = function(el, add) {
	add ? el.classList = 'selected' : el.classList = ''
}

export default ListView;