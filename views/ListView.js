import View from './View.js'

const ListView = new View()

ListView.setup = function(el) {
	this.el = el
	console.log(this.el)
	return this
}

ListView.render = function(data) {
	console.log(data)
	console.log('watch my cute flogs')
}

export default ListView;