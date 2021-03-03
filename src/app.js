import './style.css'

import nyancat from './nyancat.jpg'

import Controller from './controllers/Controller.js'

window.addEventListener('DOMContentLoaded', () => {
	const imgEl = document.createElement('img')
	imgEl.src = nyancat
	document.body.appendChild(imgEl)

	Controller.init()
})