export default class View {
	constructor() {
		this.events = {}
	}

	on(eventName, func) {
		this.events[eventName] = this.events[eventName] || []
		this.events[eventName].push(func)
	}

	emit(eventName, data) {
		if ( this.events[eventName] ) this.events[eventName].forEach(func => {
			func(data)
		})
	}
}