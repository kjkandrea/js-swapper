import View from './View.js'

const ControllerView = new View()

ControllerView.setup = function(el) {
	this.el = el
	return this
}

ControllerView.unlock = function() {
	ControllerView.el.querySelectorAll('button').forEach(el => {
		el.removeAttribute('disabled')
	})
}

export default ControllerView;