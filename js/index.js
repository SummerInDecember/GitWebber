
document.getElementById('goBack').addEventListener('click', () => {
    window.electronAPI.goBack();
});

document.getElementById('goForth').addEventListener('click', () => {
    window.electronAPI.goForth();
});