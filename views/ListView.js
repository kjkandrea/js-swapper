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

	const hasFrog = ListView.selectedFrog.some(v => v === index);
	if (!hasFrog) ListView.selectedFrog.push(index)

	console.log(ListView.selectedFrog)
}

export default ListView;