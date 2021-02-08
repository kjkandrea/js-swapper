import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
	this.el = el
	console.log(this.el)
	return this
}

export default ListView;