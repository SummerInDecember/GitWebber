
document.getElementById('goBack').addEventListener('click', () => {
    window.electronAPI.goBack();
});

document.getElementById('goForth').addEventListener('click', () => {
    window.electronAPI.goForth();
});

document.getElementById('searchBar').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') 
    {
        window.electronAPI.enteredSearch(document.getElementById('searchBar').value);
    }
});