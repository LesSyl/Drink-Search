const input = document.querySelector('.input')
const li = document.querySelectorAll('li')

const searchDrink = e => {
	const text = input.value.toLowerCase()
	li.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searchDrink)
