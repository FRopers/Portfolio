let button = document.getElementById('toggle_btn');
let menu = document.getElementById('menu')
        
button.addEventListener('click', function() {
        if (menu.className === 'menu-delete') {
            menu.classList.remove('menu-delete');
        }
        else {
            menu.classList.add('menu-delete');
        }           
});
