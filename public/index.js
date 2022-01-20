const left_pane = document.querySelector('#left-pane')
const menu = document.querySelector('#menu')
const section = document.getElementById('section')


menu.addEventListener('click', () => {
    if (left_pane.classList.contains('hidden')) {
        left_pane.classList.remove('hidden');
        section.classList.add('hidden');
    } else {
        left_pane.classList.add('hidden');
        section.classList.remove('hidden');
    }
})
