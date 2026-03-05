document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');

    setupFontSize(book);
    setupTextColor(book);
    setupBackgroundColor(book);
});

function setupFontSize(book) {
    const fontButtons = document.querySelectorAll('.font-size');
    
    fontButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            fontButtons.forEach(btn => btn.classList.remove('font-size_active'));
            
            book.classList.remove('book_fs-big', 'book_fs-small');
            
            const size = this.dataset.size;
            if (size === 'big') {
                book.classList.add('book_fs-big');
                this.classList.add('font-size_active');
            } else if (size === 'small') {
                book.classList.add('book_fs-small');
                this.classList.add('font-size_active');
            } else {
                this.classList.add('font-size_active');
            }
        });
    });
}

function setupTextColor(book) {
    const textButtons = document.querySelectorAll('[data-text-color]');
    
    textButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            textButtons.forEach(btn => btn.classList.remove('color_active'));
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            
            this.classList.add('color_active');
            book.classList.add(`book_color-${this.dataset.textColor}`);
        });
    });
}

function setupBackgroundColor(book) {
    const bgButtons = document.querySelectorAll('[data-bg-color]');
    
    bgButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            bgButtons.forEach(btn => btn.classList.remove('color_active'));
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            
            this.classList.add('color_active');
            book.classList.add(`book_bg-${this.dataset.bgColor}`);
        });
    });
}