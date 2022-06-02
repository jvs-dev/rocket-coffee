let openmenu = document.getElementById('openmenu')
let closemenu = document.getElementById('closemenu')
let menutoggle = document.getElementById('menutoggle')
let menu = document.getElementById('menu')

menutoggle.onclick = function () {
    closemenu.classList.toggle('active')
    openmenu.classList.toggle('active')
    menu.classList.toggle('active')
}