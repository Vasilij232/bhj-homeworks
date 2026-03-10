localStorage.removeItem('user_id');


document.addEventListener('DOMContentLoaded', function() {
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdEl = document.getElementById('user_id');
    const form = document.getElementById('signin__form');
    
    function checkAuth() {
        const savedUserId = localStorage.getItem('user_id');
        console.log('📱 localStorage:', savedUserId);
        
        if (savedUserId) {
            userIdEl.textContent = savedUserId;
            welcome.classList.add('welcome_active');
            signin.classList.remove('signin_active');
            return true;
        } else {
            signin.classList.add('signin_active');
            welcome.classList.remove('welcome_active');
            return false;
        }
    }
    
    const isAuth = checkAuth();
    
    if (!isAuth) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    const result = JSON.parse(xhr.responseText);
                    
                    if (result.success) {
                        localStorage.setItem('user_id', result.user_id);
                        userIdEl.textContent = result.user_id;
                        welcome.classList.add('welcome_active');
                        signin.classList.remove('signin_active');
                    } else {
                        alert('Неверный логин/пароль');
                    }
                }
            };
            
            xhr.send(formData);
        });
    }
});
