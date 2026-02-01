document.addEventListener("click", function(event) {
 if (event.target.closest('.tab')) {
    const tab = event.target.closest('.tab');
    const tabsContainer = tab.closest('.tabs');
        
    const allTabs = tabsContainer.querySelectorAll('.tab');
    allTabs.forEach(t => t.classList.remove('tab_active'));
        
    const allContents = tabsContainer.querySelectorAll('.tab__content');
    allContents.forEach(c => c.classList.remove('tab__content_active'));
        
    tab.classList.add('tab_active');
        
    const tabIndex = Array.from(allTabs).indexOf(tab);
    allContents[tabIndex].classList.add('tab__content_active');
    }
});
