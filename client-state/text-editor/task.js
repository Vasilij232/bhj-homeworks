document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    
    const savedText = localStorage.getItem('editor_text');
    if (savedText) {
        editor.value = savedText;
    }
    
    editor.addEventListener('input', function() {
        localStorage.setItem('editor_text', editor.value);
    });
});
