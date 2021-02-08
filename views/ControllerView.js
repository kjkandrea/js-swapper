import View from './View.js'

const ControllerView = new View()

ControllerView.setup = function(el) {
	this.el = el
	this.bindEvents(el)
	return this
}

ControllerView.unlock = function() {
	ControllerView.el.querySelectorAll('button').forEach(el => {
		el.removeAttribute('disabled')
	})
}

ControllerView.bindEvents = function(el) {
	el.addEventListener('click', ControllerView.action)
}

ControllerView.action = function(event) {
	const action = event.target.dataset.action;
	if (!action) return;

	ControllerView.emit('action', action)
}

export default ControllerView;