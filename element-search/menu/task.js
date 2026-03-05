document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', function(e) {
            const menuItem = this.closest('.menu__item');
            const submenu = menuItem.querySelector('.menu_sub');

            if (submenu) {
                e.preventDefault();  
                submenu.classList.toggle('menu_active');
            }
        });
    });
});
