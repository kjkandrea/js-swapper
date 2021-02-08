import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
	this.el = el
	console.log(this.el)
	return this
}

ListView.render = function(data) {
	ListView.el.innerHTML = data.map(({ index, name }) => {
		return `<li><button data-index="${index}">${ name }</button></li>`
	}).join('')
}

export default ListView;