let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.List .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let List = container.querySelector('.List')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

item = 0
item = 1
item = 2
item = 3



nextbutton.onclick = () => {
    List.style.setProperty('--calculation', 1)
    let itemOld = container.querySelector('.List .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)

}


prevbutton.onclick = () => {
    List.style.setProperty('--calculation', -1)

    let itemOld = container.querySelector('.List .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)

}
