import View from './View.js'

const ControllerView = new View()

ControllerView.setup = function(el) {
	this.el = el
	console.log(el)
	return this
}

export default ControllerView;